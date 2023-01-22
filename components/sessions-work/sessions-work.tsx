import { Container, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { YouTube } from "../youtube/youtube";

export const SessionsWork: FC = () => {
  return (
    <Container maxW="container.lg">
      <Heading size="lg" mt={8}>
        Building Sessions
      </Heading>
      <Text mt={4}>
        Sessions was a platform for artists to make money through a variety of
        offerings: streaming events, selling personalized videos, sharing
        personalized content to subscribed fans, and more.
      </Text>
      <Text mt={4}>
        At its peak, the service had over 130k active musicians and 1.7m fans,
        generating $1m in paid ticket revenue during the pandemic. Headliner
        artists generated $200k monthly recurring revenue.
      </Text>
      <Text mt={4}>
        This was possible with the help of a close, caring, and focused
        engineering team. Contributing to the prospects of helping musicians
        earn meaningful income filled us with a strong sense of purpose.
      </Text>
      <YouTube
        video="IDVPaOVYfJA"
        width={480}
        height={360}
        thumbnailQuality="hqdefault"
        my={4}
      />
      <Text as="i" fontSize="sm">
        Headliner artists Why Don't We performing a live session for fans. I
        built those widgets in the back!
      </Text>
    </Container>
  );
};
