import { useMutation } from '@tanstack/react-query';
import { participantService } from '../../services';
import { QUERY_KEYS } from '../../constants/queryKeys';

export function useScanParticipant() {
  return useMutation({
    mutationKey: QUERY_KEYS.PARTICIPANT.ROOT,
    mutationFn: participantService.scan,
  });
}

