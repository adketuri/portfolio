import {
  Container,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FC } from "react";
import { YouTube } from "../youtube/youtube";

export const SessionsWork: FC = () => {
  return (
    <Container maxW="container.lg">
      <Heading size="lg" mt={8}>
        Building Sessions
      </Heading>
      <Text mt={8}>
        Sessions was a platform for artists to make money through a variety of
        offerings: streaming events, selling personalized videos, sharing
        personalized content to subscribed fans, and more.
      </Text>
      <Text mt={8}>
        At its peak, the service had over 130k active musicians and 1.7m fans,
        generating $1m in paid ticket revenue during the pandemic. Headliner
        artists generated $200k monthly recurring revenue.
      </Text>
      <Text mt={8}>
        This was possible with the help of a close, caring, and focused
        engineering team. Contributing to the prospects of helping musicians
        earn meaningful income filled us with a strong sense of purpose. Here
        are some of my favorite things I worked on:
      </Text>
      <UnorderedList mt={8} spacing={1.5}>
        <ListItem>
          Led a team of 3 engineers to plan, develop, and deploy features to an
          audience of 130k musicians and 1.7m fans.
        </ListItem>
        <ListItem>
          Built a ticketing system for live streamed shows, which generated $1m
          in paid ticket sales.
        </ListItem>
        <ListItem>
          Wrote native wrappers for the Amazon IVS Broadcast SDK to allow
          artists to stream from our React Native application, increasing artist
          streams by 40%.
        </ListItem>
        <ListItem>
          Implemented a monthly subscription service using the Stripe SDK for
          artists to share exclusive content, generating $200k MRR for headliner
          artists.
        </ListItem>
        <ListItem>
          Conducted interviews and developed training materials for new hires,
          growing the team from 4 to 12 engineers and doubling onboarding
          throughput.
        </ListItem>
      </UnorderedList>
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
