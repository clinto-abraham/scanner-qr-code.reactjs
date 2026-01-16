"use strict";

import { useQuery } from '@tanstack/react-query';
import { eventService } from '../../services';
import { QUERY_KEYS } from '../../constants/queryKeys';

/**
 * Fetch single event details by eventId
 *
 * Usage:
 * const { data, isLoading, error } = useEventDetails(eventId);
 */
export function useEventDetails(eventId) {
  return useQuery({
    queryKey: QUERY_KEYS.EVENT.DETAILS(eventId),

    queryFn: () => eventService.getEventById(eventId),

    enabled: !!eventId,

    // Event details rarely change
    staleTime: 1000 * 60 * 10, // 10 minutes

    // Retry only for network / server issues
    retry: (failureCount, error) => {
      if (error?.status >= 400 && error?.status < 500) {
        return false;
      }
      return failureCount < 2;
    },
  });
}
