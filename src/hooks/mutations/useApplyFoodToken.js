import { useMutation, useQueryClient } from '@tanstack/react-query';
import { participantService } from '../../services';
import { QUERY_KEYS } from '../../constants/queryKeys';

export function useApplyFoodToken(participantId) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => participantService.applyFood(participantId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.PARTICIPANT.FOOD(participantId),
      });
    },
  });
}
