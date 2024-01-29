import type { AppProps } from "next/app";
import Nav from "../src/presentation/components/Nav";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import '../src/styles.css';
import Bottom from "../src/presentation/components/Bottom";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
        <Nav />
      <Component {...pageProps} />
      <Bottom />
    </ThemeProvider>
  );
}
