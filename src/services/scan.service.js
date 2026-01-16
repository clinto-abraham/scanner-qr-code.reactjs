"use strict";

import { apiClient } from "../api/configs/apiClient";
import { API_ROUTES } from "../api/routes/apiRoutes";

// import { API_ROUTES, apiClient } from "..";

/**
 * ENTRY SCAN
 * payload: { qrToken }
 */
export const scanEntryService = payload =>
  apiClient(API_ROUTES.SCAN_ENTRY, {
    method: "POST",
    payload,
  });

/**
 * FOOD SCAN
 * payload: { qrToken, mealType? }
 */
export const scanFoodService = payload =>
  apiClient(API_ROUTES.SCAN_FOOD, {
    method: "POST",
    payload,
  });

/**
 * STAY SCAN
 * payload: { qrToken, roomId? }
 */
export const scanStayService = payload =>
  apiClient(API_ROUTES.SCAN_STAY, {
    method: "POST",
    payload,
  });
