"use strict";

import { apiClient } from '../api';
import { API_ROUTES } from '../api';

/**
 * CREATE
 */
export const createParticipant = payload =>
  apiClient(API_ROUTES.PARTICIPANT_SCAN, {
    method: "POST",
    payload,
  });

/**
 * READ (list)
 */
export const getParticipants = params =>
  apiClient(API_ROUTES.PARTICIPANT_SCAN, {
    method: "GET",
    payload: params, // or query params if backend supports
  });

/**
 * READ (by ID)
 */
export const getParticipantById = id =>
  apiClient(`${API_ROUTES.PARTICIPANT_SCAN}/${id}`, {
    method: "GET",
  });

/**
 * UPDATE
 */
export const updateParticipant = (id, payload) =>
  apiClient(`${API_ROUTES.PARTICIPANT_SCAN}/${id}`, {
    method: "PUT",
    payload,
  });

/**
 * DELETE
 */
export const deleteParticipant = id =>
  apiClient(`${API_ROUTES.PARTICIPANT_SCAN}/${id}`, {
    method: "DELETE",
  });


  export const participantService = {
  scan: (payload) =>
    apiClient(API_ROUTES.PARTICIPANT_SCAN, {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  getBatchQRParticipants: (payload) =>
    apiClient(API_ROUTES.PARTICIPANTS_BATCH_QR, {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
};
