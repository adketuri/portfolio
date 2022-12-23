import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

export const About: FC = () => {
  return (
    <Box>
      <Heading size="lg" py={4}>
        About Me
      </Heading>
      <Text>
        I graduated from University of San Francisco with a BS in Computer
        Science and have over ten years professional programming experience.
      </Text>
      <Text mt={4}>
        In 2018 I founded Alcuria Games LLC to create and publish video games in
        my spare time.
      </Text>
    </Box>
  );
};
