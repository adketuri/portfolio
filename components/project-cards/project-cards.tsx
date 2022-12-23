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
import Image from "next/image";
import { allImages } from "./images";

export const ProjectCards = () => {
  return (
    <Container maxW="container.lg">
      <Heading size="lg" mt={8}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, null, 2, 3]} gap={8} mt={8}>
        {projects.map((project, i) => (
          <GridItem w="full" mb={10} key={project.title}>
            <Flex direction="column" height="100%">
              <Box position="relative" height={180} overflow="hidden">
                <Image
                  src={allImages[project.image]}
                  fill
                  style={{ objectFit: "cover" }}
                  alt={project.title}
                />
                <Heading
                  position="absolute"
                  bottom={0}
                  size="md"
                  p={1}
                  bg="blackAlpha.600"
                  width="full"
                  color="white"
                >
                  {project.title}
                </Heading>
              </Box>
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
