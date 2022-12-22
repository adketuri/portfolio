import {
  Badge,
  Box,
  Card,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { LinkList } from "../link-list/link-list";
import { projects } from "./project-cards.props";

export const ProjectCards = () => {
  return (
    <>
      <Heading size="lg" mx={4} mt={4}>
        Projects
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={4} m={4}>
        {projects.map((project) => (
          <GridItem w="full" mb={10}>
            <Box key={project.title}>
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
              {project.tags?.map((tag) => (
                <Badge key={tag} mr={2} my={4}>
                  {tag}
                </Badge>
              ))}
              <Text mb={3}>{project.description}</Text>
              <Divider my={3} />
              <Text>Date: {project.date}</Text>
              {project.links && <LinkList links={project.links} />}
            </Box>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
