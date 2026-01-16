import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../constants/queryKeys';

export function useInvalidateParticipant() {
  const queryClient = useQueryClient();

  return (participantId) => {
    queryClient.invalidateQueries({
      queryKey: QUERY_KEYS.PARTICIPANT.BY_ID(participantId),
    });
  };
}
