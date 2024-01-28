import type { AppProps } from "next/app";
import Nav from "../src/presentation/components/Nav";
import StyledNav from "./styles/StyledNav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledNav>
        <Nav />
      </StyledNav>

      <Component {...pageProps} />
    </>
  );
}
