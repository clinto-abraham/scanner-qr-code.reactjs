import { useQuery } from '@tanstack/react-query';
import { participantService } from '../../services';
import { QUERY_KEYS } from '../../constants/queryKeys';

export function useParticipantsList(filters) {
  return useQuery({
    queryKey: [...QUERY_KEYS.PARTICIPANTS.LIST, filters],
    queryFn: () => participantService.list(filters),
    keepPreviousData: true,
  });
}
