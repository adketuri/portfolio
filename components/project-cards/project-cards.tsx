import {
  Badge,
  Box,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { LinkList } from "../link-list/link-list";
import { TagList } from "../tag-list/tag-list";
import { projects } from "./project-cards.props";

export const ProjectCards = () => {
  return (
    <Container maxW="container.lg">
      <Heading size="lg" mt={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, null, 2, 3]} gap={8} my={8}>
        {projects.map((project) => (
          <GridItem w="full" mb={10} key={project.title}>
            <Flex direction="column" height="100%">
              <Flex bgImage={project.image} height={180} alignItems="end">
                <Heading
                  size="md"
                  p={1}
                  bg="blackAlpha.600"
                  width="100%"
                  color="white"
                >
                  {project.title}
                </Heading>
              </Flex>
              {project.tags && <TagList tags={project.tags} />}
              <Box h={6}>
                {project.links && <LinkList links={project.links} />}
              </Box>
              <Text>Date: {project.date}</Text>
              <Divider my={3} />
              <Box flex={1}>
                <Text mb={3}>{project.description}</Text>
              </Box>
            </Flex>
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
};
