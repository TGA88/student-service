import axios from 'axios';
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

export interface AxAuthzOptions {
  jwksUri: string;
  audience: string;
  tokenIssuer: string;
}

export interface ILineVerifyResponse {
  client_id: string,
  expires_in: number,
  scope: string
}

export interface IGetLineProfile {
  userId: string,
  displayName: string,
  pictureUrl: string
}
export interface ILineConfig {
  clientId: string
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


export const authzOptions: AxAuthzOptions = {
  // azure ad
  // jwksUri: "https://login.microsoftonline.com/52f315ba-de63-468c-87c7-a8247c35c604/.well-known/openid-configuration",
  // jwksUri: "https://login.microsoftonline.com/52f315ba-de63-468c-87c7-a8247c35c604/discovery/keys",
  jwksUri: "https://login.microsoftonline.com/52f315ba-de63-468c-87c7-a8247c35c604/discovery/v2.0/keys",
  audience: "26f0af73-c0b2-4811-b2ee-6d4ee8c835ef",
  tokenIssuer: "https://login.microsoftonline.com/52f315ba-de63-468c-87c7-a8247c35c604/v2.0"

  // auth 0
  // jwksUri: "https://dev--ugecqjm.us.auth0.com/.well-known/jwks.json",
}

export const lineOptions: ILineConfig = {
  clientId: "1657834302"
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

async function getSigningKey2(kid: string): Promise<string> {
  const client = jwksClient({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 10, // Default value
    jwksUri: authzOptions.jwksUri,
  });
  try {
    console.log("kid", kid)
    const signingKey: SigningKey = await client.getSigningKey(kid);
    console.log("signingKey", signingKey)
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
    console.log("error at get signkey", error)
  }


  throw new Error('Unauthorized');
}

// https://developers.line.biz/en/docs/line-login/secure-login-process/#using-access-tokens
// method 1 
async function verifyLineToken(accessToken: string): Promise<any> {
  try {
    console.log("access_token",accessToken)
    const verify = await axios.get(`https://api.line.me/oauth2/v2.1/verify?access_token=${accessToken}`)
    if (verify.data.client_id === lineOptions.clientId) {
      const getProfile = await axios.get(
        "https://api.line.me/v2/profile", {
        headers: {
          'authorization': `Bearer ${accessToken}`
        }
      })
      return getProfile.data
    }
  } catch (error) {
    console.error("Error in verifyLineToken", error)
    throw new Error('Unauthorized');
  }

}

//method 2 
// async function verifyLineTokenOpenID(): Promise<any>{
  
// }

export async function authorize2(headers: any): Promise<IPayload> {
  console.log("test", headers)
  const token = getToken(headers);
  console.log("token", token)
  if (headers['login-type'] === "line"){
    const verified = await verifyLineToken(token) 
    return verified
  }

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
  console.log("verified", verified)
  return verified;
};