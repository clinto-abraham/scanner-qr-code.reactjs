import { useQuery } from '@tanstack/react-query';
import { participantService } from '../../services';
import { QUERY_KEYS } from '../../constants/queryKeys';

export function useStayDetails(participantId) {
  return useQuery({
    queryKey: QUERY_KEYS.PARTICIPANT.STAY(participantId),
    queryFn: () => participantService.getStay(participantId),
    enabled: !!participantId,
  });
}
