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

  // const token = header['Authorization'];
  const token = header['authorization'];

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

export const authzOptions: AxAuthzOptions = {
  // azure ad
  // jwksUri: "https://login.microsoftonline.com/52f315ba-de63-468c-87c7-a8247c35c604/.well-known/openid-configuration",
  
  jwksUri: "https://login.microsoftonline.com/52f315ba-de63-468c-87c7-a8247c35c604/discovery/v2.0/keys",
  // auth 0
  audience: "api://c948752c-6ae8-4096-9c9d-4e34ad04bb52",
  // jwksUri: "https://dev--ugecqjm.us.auth0.com/.well-known/jwks.json",
  tokenIssuer: "https://sts.windows.net/52f315ba-de63-468c-87c7-a8247c35c604/"
}

export function makeAuthorizer(
  headers: string[] | object,
  authzOptions: AxAuthzOptions
): AxHttpAuthorizer {
  authorize.bind({ headers, authorize });
  getSigningKey.bind({ jwksUri: authzOptions.jwksUri });

  return authorize;
}

async function authorize(): Promise<IPayload> {
  console.log("test", this.headers)
  const headers = this.headers
  const authzOptions = this.authzOptions
  console.log("authorize work")
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

async function getSigningKey2(kid: string): Promise<string> {
  const client = jwksClient({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10, // Default value
    jwksUri: authzOptions.jwksUri,
  });
  try {
    console.log("kid",kid)
    const signingKey: SigningKey = await client.getSigningKey(kid);
    console.log("signingKey",signingKey)
    if ('publicKey' in signingKey) {
      console.log("publicKey")
      return signingKey.publicKey;
    } else if ('rsaPublicKey' in signingKey) {
      console.log("rsaPublicKey")
      return signingKey.rsaPublicKey;
    }

    console.log(
      'Get signing key success. But parsed payload not found `publicKey` or `rsaPublicKey`'
    );
  } catch (error) {
    console.log("error at get signkey",error)
  }


  throw new Error('Unauthorized');
}

export async function authorize2(headers: any, authzOptions: any): Promise<IPayload> {
  console.log("test", headers)
  console.log("authorize work")
  const token = getToken(headers);
  console.log("token", token)
  const decoded = jwt.decode(token, { complete: true }) as IDecode;
  console.log("DECODED", decoded)
  if (!decoded || !decoded.header || !decoded.header.kid) {
    // TODO: Custom authorizer must return fix wording or object
    throw new Error('Unauthorized');
  }

  const signingKey = await getSigningKey2(decoded.header.kid);

  const jwtOption: VerifyOptions = {
    issuer: authzOptions.tokenIssuer,
    audience: authzOptions.audience,
  };
  const verified = jwt.verify(token, signingKey, jwtOption) as IPayload;
  console.log("verified",verified)
  return verified;
};