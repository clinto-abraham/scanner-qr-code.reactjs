"use strict";

export const QUERY_KEYS = {
  PARTICIPANT: {
    ROOT: ['participant'],
    BY_ID: (id) => ['participant', id],
    SCAN: (participantId, eventId) => [
      'participant',
      'scan',
      participantId,
      eventId,
    ],
    FOOD: (id) => ['participant', id, 'food'],
    STAY: (id) => ['participant', id, 'stay'],
  },

  PARTICIPANTS: {
    LIST: ['participants'],
  },

  EVENT: {
    DETAILS: (eventId) => ['event', eventId],
    ACTIVE: (year) => ['event', 'active', year],
    BY_ID: (eventId) => ['event', eventId],
  },
};

