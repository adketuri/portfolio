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
import { LinkList } from "../link-list/link-list";
import { Link } from "../link-list/link-list.props";

const links: Link[] = [
  { text: "github", url: "https://github.com/adketuri", external: true },
  {
    text: "stackoverflow",
    url: "https://stackoverflow.com/users/2158740/adketuri",
    external: true,
  },
  {
    text: "linkedin",
    url: "https://www.linkedin.com/in/andrewketuri",
    external: true,
  },
];

export const Header = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const spacer = useBreakpointValue({ sm: false, lg: true });
  const secondaryHeader = useBreakpointValue({ md: "Find Me" });
  return (
    <Flex bg={bg} py={8} direction={{ sm: "column", md: "row" }}>
      <Container maxW="container.lg">
        <Flex>
          <HeaderBox title="Hello! 👋" titleRight={<ColorModeButton />}>
            <Text mt={2}>
              I'm Andrew Keturi, a Software Engineer based in the SF Bay Area.
            </Text>
            <Text mt={2}>
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
