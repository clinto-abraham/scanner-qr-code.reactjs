import { QueryClient } from '@tanstack/react-query';

/**
 * Exponential backoff with cap
 * attempt: 0,1,2,...
 */
function defaultRetryDelay(attempt) {
  return Math.min(1000 * 2 ** attempt, 8000); // max 8s
}

/**
 * Decide whether retry should happen
 */
function shouldRetry(failureCount, error) {
  // Do NOT retry client errors
  if (error?.status >= 400 && error?.status < 500) {
    return false;
  }

  // Retry max 3 times
  return failureCount < 3;
}



export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 2,      // 2 minutes
      gcTime: 1000 * 60 * 30,        // v5 uses gcTime
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: shouldRetry,
      retryDelay: defaultRetryDelay,
    },
  },
});
