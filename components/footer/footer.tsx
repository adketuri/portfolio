import {
  Box,
  Flex,
  Spacer,
  useColorModeValue,
  Text,
  Container,
  Link,
} from "@chakra-ui/react";
import { FC } from "react";
import { ColorModeButton } from "../color-mode-button";
import { HeaderBox } from "../header-box/header-box";
import { LinkList } from "../link-list/link-list";
import NextLink from "next/link";
import { EmailIcon } from "@chakra-ui/icons";

const links: Link[] = [
  { text: "resume", url: "https://github.com/adketuri", external: true },
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
    <Box bg={bg} py={8}>
      <Container maxW="container.lg">
        <HeaderBox title="Let's Connect">
          <>
            <Flex align="center">
              <EmailIcon mr={2} />
              <Link as={NextLink} href={"mailto:adketuri@gmail.com"}>
                adketuri@gmail.com
              </Link>
            </Flex>
            <Spacer h={1} />
            <LinkList links={links} />
          </>
        </HeaderBox>
        <Flex py={4} align="center">
          <Text fontSize="sm" flex={1}>
            ©{new Date().getFullYear()} alcuria.net
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
