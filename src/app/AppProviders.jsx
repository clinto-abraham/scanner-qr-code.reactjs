import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../configs/reactQuery.config";
import ErrorBoundary from "../components/error/ErrorBoundary";

export default function AppProviders({ children }) {
  return (
    <ErrorBoundary name="App Providers" location="./src/app/AppProviders.jsx">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ErrorBoundary>
  );
}
