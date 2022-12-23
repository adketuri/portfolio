import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";
import { About } from "../about/about";
import { TagList } from "../tag-list/tag-list";
import NextLink from "next/link";
const tags = [
  "typescript",
  "react",
  "react native",
  "next.js",
  "mobx state tree",
  "java",
  "libgdx",
];
export const Skills: FC = () => {
  const bg = useColorModeValue("gray.200", "gray.700");
  return (
    <Box bg={bg} py={4}>
      <Container maxW="container.lg">
        <Flex direction={{ sm: "column", md: "row" }}>
          <Box flex={{ md: 1, lg: 2 }}>
            <Heading size="lg" py={4}>
              Technical Skills
            </Heading>
            <TagList tags={tags} mt={1} />
            <Text mt={1}>
              I've worked with several programming languages and libraries. For
              web applications I'm a fan of <b>React, Typescript, Next.js,</b>{" "}
              and <b>Chakra UI</b>. When I'm making games, I tend to lean into{" "}
              <b>Java/Libgdx</b> or <b>GML</b>. I'm comfortable writing native
              Android applications with Java, though these days I find{" "}
              <b>React Native</b> a bit more pleasant.
            </Text>
          </Box>
          <Box flex={1} ml={{ md: 8, lg: 16 }} mb={4}>
            <About />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
