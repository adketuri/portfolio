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
import { projects } from "./project-cards.props";

export const ProjectCards = () => {
  return (
    <Container maxW="container.lg">
      <Heading size="lg" mx={4} mt={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, null, 2, 3]} gap={8} m={4}>
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
              <Flex direction="row">
                {project.tags?.map((tag) => (
                  <Badge key={tag} mr={2} my={4}>
                    {tag}
                  </Badge>
                ))}
              </Flex>
              <Box flex={1}>
                <Text mb={3}>{project.description}</Text>
              </Box>
              <Divider my={3} />
              <Text>Date: {project.date}</Text>
              <Box h={6}>
                {project.links && <LinkList links={project.links} />}
              </Box>
            </Flex>
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
};
