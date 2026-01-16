"use strict";

import { useQuery } from '@tanstack/react-query';
import { participantService } from '../../services';
import { QUERY_KEYS } from '../../constants/queryKeys';

export function useParticipant(participantId) {
  return useQuery({
    queryKey: QUERY_KEYS.PARTICIPANT.BY_ID(participantId),
    queryFn: () => participantService.getById(participantId),
    enabled: !!participantId,
  });
}
