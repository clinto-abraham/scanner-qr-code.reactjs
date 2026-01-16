import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../constants/queryKeys';
import { participantService } from '../../services';

export function useOptimisticFoodUpdate(participantId) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => participantService.applyFood(participantId),

    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.PARTICIPANT.FOOD(participantId),
      });

      const previous =
        queryClient.getQueryData(
          QUERY_KEYS.PARTICIPANT.FOOD(participantId)
        );

      queryClient.setQueryData(
        QUERY_KEYS.PARTICIPANT.FOOD(participantId),
        { allowed: true, alreadyUsed: true }
      );

      return { previous };
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(
        QUERY_KEYS.PARTICIPANT.FOOD(participantId),
        context.previous
      );
    },
  });
}
