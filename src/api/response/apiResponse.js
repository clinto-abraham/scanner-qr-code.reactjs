"use strict";

/**
 * Normalizes backend response
 * Expected backend format:
 * {
 *   success: boolean,
 *   data?: any,
 *   message?: string,
 *   errorCode?: string
 * }
 */
export function normalizeResponse(response) {
  if (!response || typeof response !== 'object') {
    return response;
  }

  if (response.success === false) {
    const error = new Error(response.message || 'Request failed');
    error.code = response.errorCode;
    throw error;
  }

  return response.data ?? response;
}
