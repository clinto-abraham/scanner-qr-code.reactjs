"use strict";

import { apiClient } from '../api';
import { API_ROUTES } from '../api';

export const eventService = {
  /**
   * Fetch active events by year
   */
  getActiveEvents: (payload) =>
    apiClient(`${API_ROUTES.EVENT_GET_ALL_ACTIVE}`, {
      method: 'POST',
      body: JSON.stringify(payload)
    }),

  /**
   * Fetch single event details
   */
  getEventById: (eventId) =>
    apiClient(`${API_ROUTES.EVENT_GET_BY_ID}/${eventId}`),

  /**
   * Fetch participants for batch QR generation
   * Filters handled by backend
   */
  getParticipantsForQR: (payload) =>
    apiClient(API_ROUTES.PARTICIPANTS_BATCH_QR, {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
};
