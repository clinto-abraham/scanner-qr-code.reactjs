"use strict";

import { normalizeResponse } from "../response/apiResponse";
import { ApiError } from "../errors/apiError";
import { BACKEND_API_URL } from "../routes/apiUrl";

export async function apiClient(
  endpoint,
  {
    method = "GET",
    headers = {},
    payload,
    signal,
  } = {}
) {
  let response;

  try {
    response = await fetch(`${BACKEND_API_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body:
        payload && !["GET", "DELETE"].includes(method.toUpperCase())
          ? JSON.stringify({ payload })
          : undefined,
      signal,
    });
  } catch (err) {
    console.log(err)
    throw new ApiError({
      message: "Network error",
      status: 0,
      code: "NETWORK_ERROR",
    });
  }

  let responsePayload;
  try {
    responsePayload = await response.json();
  } catch {
    responsePayload = null;
  }

  if (!response.ok) {
    throw new ApiError({
      message: responsePayload?.message || "API Error",
      status: response.status,
      code: responsePayload?.errorCode || "API_ERROR",
    });
  }

  return normalizeResponse(responsePayload);
}


// "use strict";

// import { normalizeResponse } from "./apiResponse";
// import { ApiError } from "./apiError";
// import { BACKEND_API_URL } from "./apiUrl";
// import { signRequest } from './apiRequestSigner';
// /**
//  * Core API client
//  * - Handles fetch
//  * - Normalizes responses
//  * - Throws ApiError for React Query
//  */
// export async function apiClient(
//     endpoint,
//     {
//         method = "GET",
//         headers = {},
//         payload,
//         signal,
//     } = {}
// ) {
//     // ✅ MUST be per-request
//     const requestId = crypto.randomUUID();
//     const timestamp = new Date().toISOString();

//     const signature = await signRequest({
//         requestId,
//         timestamp,
//         payload,
//     });
//     // ✅ SAFELY sanitize payload (prevents Safari silent failure)
//     const safePayload =
//         payload && typeof payload === "object"
//             ? JSON.parse(JSON.stringify(payload))
//             : payload ?? {};

//     const payloadWrapper = {
//         requestId,
//         timestamp,
//         deviceId: localStorage.getItem("deviceId"),
//         payload: safePayload,
//     };

//     let response;

//     try {
//         console.log("🚀 FETCH →", `${BACKEND_API_URL}${endpoint}`, payloadWrapper);

//         const isBodyAllowed = !["GET", "DELETE"].includes(method.toUpperCase());

//         const isSimpleGet = method.toUpperCase() === "GET";

//         const fetchOptions = {
//             method,
//             signal,
//             // credentials: "include", 
//         };

//         // 🔹 Headers
//         if (!isSimpleGet) {
//             fetchOptions.headers = {
//                 "Content-Type": "application/json",
//                 'x-signature': signature,
//                 ...headers,
//             };
//         }

//         // 🔹 Body only when allowed
//         if (isBodyAllowed) {
//             fetchOptions.body = JSON.stringify(payloadWrapper);
//         }

//         response = await fetch(`${BACKEND_API_URL}${endpoint}`, fetchOptions);


//     } catch (err) {
//         console.error("❌ FETCH FAILED", err);
//         throw new ApiError({
//             message: "Network error",
//             status: 0,
//             code: "NETWORK_ERROR",
//         });
//     }

//     let responsePayload = null;
//     try {
//         responsePayload = await response.json();
//     } catch {
//         console.log("error in converting into JSON!")
//     }

//     if (!response.ok) {
//         throw new ApiError({
//             message: responsePayload?.message || "API Error",
//             status: response.status,
//             code: responsePayload?.errorCode || "API_ERROR",
//         });
//     }

//     return normalizeResponse(responsePayload);
// }




// response = await fetch(`${BACKEND_API_URL}${endpoint}`, {
//     method,
//     headers: {
//         "Content-Type": "application/json",
//         'x-signature': signature,
//         ...headers,
//     },
//     ...(isBodyAllowed && {
//         body: JSON.stringify(payloadWrapper),
//     }),
//     signal,
//     // 🚫 REMOVE THIS UNTIL CORS IS VERIFIED
//     // credentials: "include",
// });








// "use strict";

// import { normalizeResponse } from './apiResponse';
// import { ApiError } from './apiError';
// // 
// import { BACKEND_API_URL } from './apiUrl';

// const requestId = crypto.randomUUID();
// const timestamp = new Date().toISOString();

// /**
//  * Core API client
//  * - Handles fetch
//  * - Normalizes responses
//  * - Throws ApiError for React Query
//  */
// export async function apiClient(
//     endpoint,
//     {
//         method = 'GET',
//         headers = {},
//         body,
//         payload,
//         signal,
//     } = {}
// ) {

//     let response;

//     // const signature = await signRequest({
//     //     requestId,
//     //     timestamp,
//     //     payload,
//     // });
//     let signature = "test"

//     const payloadWrapper = {
//         requestId,
//         timestamp,
//         deviceId: localStorage.getItem('deviceId'),
//         payload,
//     };

//     try {
//         response = await fetch(`${BACKEND_API_URL}${endpoint}`, {
//             method,
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-signature': signature,
//                 ...headers,
//             },
//             body: JSON.stringify(payloadWrapper),
//             signal,
//             credentials: 'include',
//         });
//     } catch (networkError) {
//         throw new ApiError({
//             message: 'Network error',
//             status: 0,
//             code: 'NETWORK_ERROR',
//         });
//     }

//     let responsePayload;
//     try {
//         responsePayload = await response.json();
//     } catch {
//         responsePayload = null;
//     }

//     if (!response.ok) {
//         throw new ApiError({
//             message: responsePayload?.message || 'API Error',
//             status: response.status,
//             code: responsePayload?.errorCode || 'API_ERROR',
//         });
//     }

//     return normalizeResponse(responsePayload);
// }








