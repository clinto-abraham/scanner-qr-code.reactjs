"use strict";

export const API_ROUTES = {
  // Events
  EVENTS_ACTIVE: 'mongo/events',
  EVENT_BY_ID: '/events',

  // Participants
  PARTICIPANT_SCAN: '/participants/scan',
  PARTICIPANTS_BATCH_QR: '/participants/batch/qr',

  // Food / Stay (future)
  PARTICIPANT_FOOD: '/participants/food',
  PARTICIPANT_STAY: '/participants/stay',

  SCAN_ENTRY: "/mongo/scan/entry",
  SCAN_FOOD: "/mongo/scan/food",
  SCAN_STAY: "/mongo/scan/stay",




  USER_CREATE: "/mongo/user/create",
  USER_PROVIDER: "/mongo/user/provider",
  USER_GET_BY_ID: "/mongo/user/get/:id",
  USER_GET_ALL: "/mongo/users/get/all",
  USER_UPDATE: "/mongo/user/update",
  USER_DEACTIVATE: "/mongo/user/deactivate",
  USER_DELETE: "/mongo/user/delete",
  USER_BULK: "/mongo/users/bulk",

  EVENT_CREATE: "/mongo/event/create",
  EVENT_PROVIDER: "/mongo/event/provider",
  EVENT_GET_BY_ID: "/mongo/event/get/:id",
  EVENT_GET_ALL_ACTIVE: "/mongo/events/get/all",
  EVENT_UPDATE: "/mongo/event/update",
  EVENT_DEACTIVATE: "/mongo/event/deactivate",
  EVENT_DELETE: "/mongo/event/delete",
  EVENT_BULK: "/mongo/events/bulk",
};
