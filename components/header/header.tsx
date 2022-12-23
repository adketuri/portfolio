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
import { ColorModeButton } from "../color-mode-button";
import { HeaderBox } from "../header-box/header-box";

export const Header = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <Flex bg={bg} py={8} direction={{ base: "column", md: "row" }}>
      <Container maxW="container.lg">
        <Flex>
          <HeaderBox title="Hello! 👋" titleRight={<ColorModeButton />}>
            <Text mt={2}>
              I'm Andrew Keturi, a Software Engineer based in the SF Bay Area.
            </Text>
            <Text mt={4}>
              I build thoughtful, responsible applications and games enjoyed by
              many. You can view some of my favorite projects I've created
              below.
            </Text>
          </HeaderBox>
        </Flex>
      </Container>
    </Flex>
  );
};
