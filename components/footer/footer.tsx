import {
  Box,
  Flex,
  Spacer,
  useColorModeValue,
  Text,
  Container,
} from "@chakra-ui/react";
import { FC } from "react";
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

export const Footer: FC = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <Box bg={bg} py={4}>
      <Container maxW="container.lg">
        <HeaderBox title="Let's Connect">
          <LinkList links={links} />
        </HeaderBox>
        <Flex p={4} align="center">
          <Text flex={1}>©{new Date().getFullYear()} alcuria.net</Text>
        </Flex>
      </Container>
    </Box>
  );
};
