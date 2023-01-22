import {
  Box,
  Flex,
  Spacer,
  Text,
  Heading,
  useColorModeValue,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import Head from "next/head";
import { ColorModeButton } from "../color-mode-button";
import { HeaderBox } from "../header-box/header-box";

export const Header = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
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
      <Flex bg={bg} py={8} direction={{ base: "column", md: "row" }}>
        <Container maxW="container.lg">
          <Flex>
            <HeaderBox title="Hello! 👋" titleRight={<ColorModeButton />}>
              <Text mt={2}>
                I'm Andrew Keturi, a Software Engineer based in the SF Bay Area.
              </Text>
              <Text mt={4}>
                I build thoughtful, responsible applications and games enjoyed
                by many. You can view some of my favorite projects I've created
                below.
              </Text>
            </HeaderBox>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};
