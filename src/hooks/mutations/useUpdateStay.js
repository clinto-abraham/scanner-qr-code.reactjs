import { useMutation, useQueryClient } from '@tanstack/react-query';
import { participantService } from '../../services';
import { QUERY_KEYS } from '../../constants/queryKeys';

export function useUpdateStay(participantId) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) =>
      participantService.updateStay(participantId, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.PARTICIPANT.STAY(participantId),
      });
    },
  });
}
