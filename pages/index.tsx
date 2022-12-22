import Head from "next/head";
import { Content, Inter } from "@next/font/google";
import { Box, chakra, Container } from "@chakra-ui/react";
import { ColorModeButton } from "../components/color-mode-button";
import { Header } from "../components/header/header";
import { ProjectCards } from "../components/project-cards/project-cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrew Keturi - Portfolio</title>
        <meta
          name="description"
          content="Portfolio of software engineer Andrew Keturi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProjectCards />
      <ColorModeButton />
    </>
  );
}

export { getServerSideProps } from "../components/chakra";
