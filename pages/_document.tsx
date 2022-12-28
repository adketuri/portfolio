import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "../styles/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:url" content="https://andrew.alcuria.net" />
        <meta property="og:title" content="Andrew Keturi - Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of software engineer Andrew Keturi"
        />
        <meta
          property="og:image"
          content="https://andrew.alcuria.net/images/me.png"
        />
        <meta property="og:site_name" content="Andrew Keturi - Portfolio" />
      </Head>

      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
