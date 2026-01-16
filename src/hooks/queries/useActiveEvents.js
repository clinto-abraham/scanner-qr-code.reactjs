import { useQuery } from '@tanstack/react-query';
import { eventService } from '../../services';
import { QUERY_KEYS } from '../../constants/queryKeys';

export function useActiveEvents(year, payload) {
 
  return useQuery({
    queryKey: QUERY_KEYS.EVENT.ACTIVE(year),
    queryFn: () => eventService.getActiveEvents(payload),
    staleTime: 1000 * 60 * 10,
  });
}
