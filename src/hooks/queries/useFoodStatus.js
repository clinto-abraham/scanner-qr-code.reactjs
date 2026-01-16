import { useQuery } from '@tanstack/react-query';
import { participantService } from '../../services';
import { QUERY_KEYS } from '../../constants/queryKeys';

export function useFoodStatus(participantId) {
  return useQuery({
    queryKey: QUERY_KEYS.PARTICIPANT.FOOD(participantId),
    queryFn: () => participantService.getFoodStatus(participantId),
    enabled: !!participantId,
  });
}
