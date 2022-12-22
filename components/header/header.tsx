import {
  Box,
  Flex,
  Spacer,
  Text,
  Heading,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
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
    <Flex bg={bg} direction={{ sm: "column", md: "row" }}>
      <HeaderBox
        title="Hello! 👋"
        description="I'm Andrew, a Software Engineer/Artist."
      />
      {spacer && <Spacer />}
      <HeaderBox title={secondaryHeader}>
        <LinkList links={links} />
      </HeaderBox>
    </Flex>
  );
};
