import { randomUUID } from 'crypto';

export function standardResponse({
  success,
  message,
  data = null,
  errorCode = null,
}) {
  return {
    success,
    message,
    ...(data !== null && { data }),
    ...(errorCode && { errorCode }),
    meta: {
      requestId: randomUUID(),
      timestamp: new Date().toISOString(),
    },
  };
}
