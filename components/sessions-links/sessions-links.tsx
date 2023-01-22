import { Heading, Text, Link, Container } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

export const SessionsLinks: FC = () => {
  return (
    <Container maxW="container.lg">
      <Heading size="lg" mt={4}>
        Further Reading
      </Heading>
      <Text mt={4}>
        <Link
          variant="outgoing"
          as={NextLink}
          href="https://www.fastcompany.com/90494948/pandora-broke-my-heart-tim-westergren-digital-radio-pioneer-returns-to-break-the-music-industrial-complex"
        >
          "Pandora broke my heart": Tim Westergren, digital radio pioneer,
          returns to break the music industrial complex
        </Link>
      </Text>
      <Text mt={2} mb={8}>
        <Link
          variant="outgoing"
          as={NextLink}
          href="https://www.rollingstone.com/pro/news/tim-westergren-pandora-sessions-artists-1053968/"
        >
          Pandora's Ex-CEO Tim Westergren Wants to (Finally) Make Artists Money
        </Link>
      </Text>
    </Container>
  );
};
