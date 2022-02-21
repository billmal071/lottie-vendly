import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Fragment } from "react";
import ContextAction from "@/context/context.action";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        cacheTime: 1000 * 60 * 20,
        staleTime: Infinity,
      },
    },
  });

  return (
    <Fragment>
      <ContextAction>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </ContextAction>
    </Fragment>
  );
}

export default MyApp;
