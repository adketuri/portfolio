import {
  Card,
  CardBody,
  Container,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import praise from "./praise.json";

export const Praise: FC = () => {
  return (
    <Container maxW="container.lg" mb={12}>
      <Heading size="lg" mt={8}>
        High-Fives
      </Heading>
      <Text mt={8}>
        At Sessions we used 15Five to track team sentiment and highlight impacts
        individuals and teams had on others (via a virtual high-five). I've kept
        these snippets to remind myself the impact I've had on my former
        teammates.
      </Text>
      <SimpleGrid columns={[1, 2, null, 3]} mt={8} gap={6}>
        {praise.map((p, i) => {
          return (
            <Card key={i}>
              <CardBody>
                <Flex direction="column" height="full">
                  <Text fontSize="sm" flex={1}>
                    {p.content}
                  </Text>
                  <Divider my={4} />
                  <Heading size="xs" textTransform="uppercase">
                    {p.author}
                  </Heading>
                </Flex>
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};
