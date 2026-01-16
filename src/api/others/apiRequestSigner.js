// "use strict";

// /**
//  * Create HMAC signature for request
//  */
// export async function signRequest({ requestId, timestamp, payload }) {
//   const secret = import.meta.env.VITE_REQUEST_SIGNING_KEY || "some_sample_key";

//   const data = `${requestId}.${timestamp}.${JSON.stringify(payload)}`;

//   const encoder = new TextEncoder();
//   const key = await crypto.subtle.importKey(
//     'raw',
//     encoder.encode(secret),
//     { name: 'HMAC', hash: 'SHA-256' },
//     false,
//     ['sign']
//   );

//   const signature = await crypto.subtle.sign(
//     'HMAC',
//     key,
//     encoder.encode(data)
//   );

//   return btoa(
//     String.fromCharCode(...new Uint8Array(signature))
//   );
// }
