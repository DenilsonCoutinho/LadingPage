import { ScreenSizeProvider } from "@/context/screenSizeContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ScreenSizeProvider>
      <Component {...pageProps} />
    </ScreenSizeProvider>
  );
}
