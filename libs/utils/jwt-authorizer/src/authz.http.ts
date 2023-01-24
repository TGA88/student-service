import * as jwt from 'jsonwebtoken';
import { VerifyOptions, JwtHeader } from 'jsonwebtoken';
import * as jwksClient from 'jwks-rsa';
import { SigningKey } from 'jwks-rsa';

//   import get from 'lodash/get'

// .env
//    JWKS_URI="<JWKS-VA>"
//    AUDIENCE="<AUDIENCE-VALUE>"
//    TOKEN_ISSUER="<ISSUER-VALUE>"

interface IPayload {
  iss: string;
  sub: string;
  aud: string;
  iat: number;
  exp: number;
  azp: string;
  gty: string;
  scope?: unknown;
  permissions: string[];
}

export interface IDecode {
  header: JwtHeader;
  payload: IPayload;
  signature: string;
}

const getToken = (header: string[]): string => {
  // Perform authorization if needed

  const token = header['Authorization'];
  if (!token) {
    console.log('Invalid authorization token');
    throw new Error('Unauthorized');
  }

  const match = token.match(/^Bearer (.*)$/);
  if (!match || match.length < 2) {
    console.log(
      `Invalid Authorization token - ${token} does not match 'Bearer .*'`
    );
    throw new Error('Unauthorized');
  }
  return match[1];
};

async function getSigningKey(kid: string): Promise<string> {
  const client = jwksClient({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10, // Default value
    jwksUri: this.jwksUri,
  });
  const signingKey: SigningKey = await client.getSigningKey(kid);
  if ('publicKey' in signingKey) {
    return signingKey.publicKey;
  } else if ('rsaPublicKey' in signingKey) {
    return signingKey.rsaPublicKey;
  }

  console.log(
    'Get signing key success. But parsed payload not found `publicKey` or `rsaPublicKey`'
  );
  throw new Error('Unauthorized');
}

export type AxHttpAuthorizer = typeof authorize;
export interface AxAuthzOptions {
  jwksUri: string;
  audience: string;
  tokenIssuer: string;
}

export function makeAuthorizer(
  headers: string[],
  authzOptions: AxAuthzOptions
): AxHttpAuthorizer {
  authorize.bind({ headers, authorize });
  getSigningKey.bind({ jwksUri: authzOptions.jwksUri });
  return authorize;
}

async function authorize():Promise<IPayload> {
 const headers = this.headers
 const authzOptions = this.authzOptions

  const token = getToken(headers);
  const decoded = jwt.decode(token, { complete: true }) as IDecode;
  if (!decoded || !decoded.header || !decoded.header.kid) {
    // TODO: Custom authorizer must return fix wording or object
    throw new Error('Unauthorized');
  }

 
  const signingKey = await getSigningKey(decoded.header.kid);

  const jwtOption: VerifyOptions = {
    issuer: authzOptions.tokenIssuer,
    audience: authzOptions.audience,
  };
  const verified = jwt.verify(token, signingKey, jwtOption) as IPayload;

  return verified;
};

