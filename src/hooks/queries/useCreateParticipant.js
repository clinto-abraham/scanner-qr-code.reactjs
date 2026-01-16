import { useMutation } from '@tanstack/react-query';
import { participantService } from '../../services';

export function useCreateParticipant() {
  return useMutation({
    mutationFn: participantService.create,
  });
}
