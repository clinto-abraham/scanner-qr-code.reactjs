import { useQuery } from '@tanstack/react-query';
import { participantService } from '../../services';
import { QUERY_KEYS } from '../../constants/queryKeys';

export function useParticipant(id) {
  return useQuery({
    queryKey: QUERY_KEYS.PARTICIPANT.SCAN(id),
    queryFn: () => participantService.scan(id),
    enabled: !!id,
  });
}
