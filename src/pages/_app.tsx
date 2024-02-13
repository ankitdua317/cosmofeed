import type { AppProps } from "next/app";
import ReduxProvider from "@/redux/ReduxProvider";
import MyApp from "@/components/MyApp";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Urban</title>
      </Head>
      <ReduxProvider>
        <MyApp>
          <Component {...pageProps} />
        </MyApp>
      </ReduxProvider>
    </>
  );
}
