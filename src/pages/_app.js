import { ScreenSizeProvider } from "@/context/screenSizeContext";
import "@/styles/globals.css";
import { InteractiveScroll } from "@/utils/interactiveScroll";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <ScreenSizeProvider>
      <InteractiveScroll/>
      <Analytics />
      <Component {...pageProps} />
    </ScreenSizeProvider>
  );
}
