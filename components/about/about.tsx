import {
  Container,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { TagList } from "../tag-list/tag-list";
const tags = [
  "typescript",
  "react",
  "react native",
  "next.js",
  "mobx state tree",
  "java",
  "libgdx",
];
export const About: FC = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <Flex bg={bg} py={8} direction={{ sm: "column", md: "row" }}>
      <Container maxW="container.lg">
        <Heading size="lg" py={4}>
          Technical Skills
        </Heading>
        <Text>
          I've worked with several programming languages and libraries. For web
          applications I'm a fan of <b>React, Typescript, Next.js,</b> and{" "}
          <b>Chakra UI</b>. When I'm making games, I tend to lean into{" "}
          <b>Java/Libgdx</b> or <b>GML</b>. I'm comfortable writing native
          Android applications with Java, though these days I find{" "}
          <b>React Native</b> a bit more pleasant.
        </Text>
        <TagList tags={tags} />
      </Container>
    </Flex>
  );
};
