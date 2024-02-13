import type { AppProps } from "next/app";
import ReduxProvider from "@/redux/ReduxProvider";
import MyApp from "@/components/MyApp";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <MyApp>
        <Component {...pageProps} />
      </MyApp>
    </ReduxProvider>
  );
}
