import { ScreenSizeProvider } from "@/context/screenSizeContext";
import "@/styles/globals.css";
import { InteractiveScroll } from "@/utils/interactiveScroll";

export default function App({ Component, pageProps }) {
  return (
    <ScreenSizeProvider>
      <Component {...pageProps} />
    </ScreenSizeProvider>
  );
}
