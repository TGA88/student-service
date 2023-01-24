// import { 
//     APIGatewayAuthorizerEvent,
//     APIGatewayAuthorizerHandler, 
//     CustomAuthorizerResult, 
//     PolicyDocument 
//   } from 'aws-lambda'
//   import jwt, { VerifyOptions, JwtHeader } from 'jsonwebtoken'
//   import jwksClient, { SigningKey } from 'jwks-rsa'
//   import get from 'lodash/get'
  
//   // .env
//   //    JWKS_URI="<JWKS-VA>"
//   //    AUDIENCE="<AUDIENCE-VALUE>"
//   //    TOKEN_ISSUER="<ISSUER-VALUE>"
  
//   interface IPayload {
//     iss: string
//     sub: string
//     aud: string
//     iat: number
//     exp: number
//     azp: string
//     gty: string
//     scope?: unknown
//     permissions: string[]
//   }
  
//   export interface IDecode {
//     header: JwtHeader
//     payload: IPayload
//     signature: string
//   }
  
//   /**
//    * Generate policy document request
//    * @param effect 
//    * @param resource 
//    * @returns 
//    */
//   const getPolicyDocument = (effect: string, resource: string): PolicyDocument => {
//     return {
//         Version: '2012-10-17', // default version
//         Statement: [{
//             Action: 'execute-api:Invoke', // default action
//             Effect: effect,
//             Resource: resource.replace(/\/(GET|POST|PUT|DELETE|PATCH)\/.*/, '/*/*'),
//         }]
//     }
//   }
  
//   const getToken = (event: APIGatewayAuthorizerEvent): string => {
//     // Perform authorization if needed
//     if (event.type !== 'TOKEN') {
//       console.log(`Unsupported authorization type: ${event.type}`)
//       throw new Error('Unauthorized')
//     }
  
//     const token = event.authorizationToken
//     if (!token) {
//       console.log('Invalid authorization token')
//       throw new Error('Unauthorized')
//     }
  
//     const match = token.match(/^Bearer (.*)$/)
//     if (!match || match.length < 2) {
//       console.log(`Invalid Authorization token - ${token} does not match 'Bearer .*'`)
//       throw new Error('Unauthorized')
//     }
//     return match[1]
//   }
  
//   const getSigningKey = async (kid: string): Promise<string> => {
//     const client = jwksClient({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 10, // Default value
//       jwksUri: process.env.AUTH0_JWKS_URI
//     })
//     const signingKey: SigningKey = await client.getSigningKey(kid)
//     if ('publicKey' in signingKey) {
//       return signingKey.publicKey
//     } else if ('rsaPublicKey' in signingKey) { 
//       return signingKey.rsaPublicKey
//     }
  
//     console.log('Get signing key success. But parsed payload not found `publicKey` or `rsaPublicKey`')
//     throw new Error('Unauthorized')
//   }
  
//   const jwtOption: VerifyOptions = {
//     audience: process.env.AUTH0_AUDIENCE,
//     issuer: process.env.AUTH0_TOKEN_ISSUER
//   }
  
//   const authorizer: APIGatewayAuthorizerHandler = async (event, context): Promise<CustomAuthorizerResult> => {
//     const token = getToken(event)
//     const decoded = (jwt.decode(token, { complete: true })) as IDecode
//     if (!decoded || !decoded.header || !decoded.header.kid) {
//       // TODO: Custom authorizer must return fix wording or object
//       throw new Error('Unauthorized')
//     }
//     const signingKey = await getSigningKey(decoded.header.kid)
//     const verified = (jwt.verify(token, signingKey, jwtOption)) as IPayload
//     const userPermissions = get(decoded.payload, 'permissions', [])
  
//     return {
//       principalId: verified.sub,
//       policyDocument: getPolicyDocument('Allow', event.methodArn),
//       context: {
//         permissions: userPermissions.join()
//       }
//     }
//   }
  
//   export default authorizer