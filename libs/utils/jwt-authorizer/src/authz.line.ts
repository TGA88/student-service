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

export interface LineProfile {
  userId: string,
  displayName: string,
  pictureUrl: string
}
export interface AxLineConfig {
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


export type AxHttpAuthorizer = typeof authorize;


export const lineOptions: AxLineConfig[] = [
  {
    clientId: "xxxxxxxxxx"
  },
  {
    clientId: "1657834302"
  }
]

export function makeAuthorizer(
  headers: string[] | object,
  lineOptions: AxLineConfig[]
): AxHttpAuthorizer {
  const verifyLine = verifyLineToken.bind({ lineOptions: lineOptions})
  const authz = authorize.bind({ headers, lineOptions, verifyLine });
  return authz;
}



// https://developers.line.biz/en/docs/line-login/secure-login-process/#using-access-tokens
// method 1 
async function verifyLineToken(accessToken: string): Promise<LineProfile> {
  try {
    console.log("access_token", accessToken)
    const verify = await axios.get(`https://api.line.me/oauth2/v2.1/verify?access_token=${accessToken}`)
    for (const data of this.lineOptions)
      if (verify.data.client_id === data.clientId) {
        const getProfile = await axios.get(
          "https://api.line.me/v2/profile", {
          headers: {
            'authorization': `Bearer ${accessToken}`
          }
        })
        return getProfile.data
      }
    throw new Error('Unauthorized');
  } catch (error) {
    console.error("Error in verifyLineToken", error)
    throw new Error('Unauthorized');
  }

}

export async function authorize(): Promise<LineProfile> {
  console.log("test", this.headers)
  const token = getToken(this.headers);
  const verifyTokenLine = this.verifyLine
  console.log("token", token)
  const verified = await verifyTokenLine(token)
  return verified

};