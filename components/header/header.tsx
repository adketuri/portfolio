import {
  Box,
  Flex,
  Spacer,
  Text,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { HeaderBox } from "../header-box/header-box";
import { LinkList } from "../link-list/link-list";

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

  return (
    <Flex bg={bg}>
      <HeaderBox
        title="Hello! 👋"
        description="I'm Andrew, a Software Engineer/Artist."
      />
      <Spacer />
      <HeaderBox title="Find Me">
        <LinkList links={links} />
      </HeaderBox>
    </Flex>
  );
};
