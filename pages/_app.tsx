import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthHoc } from "../HOCs";

export const queryClient = new QueryClient();

type WithProtected = {
  protectedRoute?: boolean;
};

function App({ Component, pageProps }: AppProps<WithProtected>) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthHoc>
        <Component {...pageProps} />
      </AuthHoc>
    </QueryClientProvider>
  );
}

export default App;
