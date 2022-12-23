import {
  Box,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from "@chakra-ui/react";
import { FC } from "react";
import { ContactLinks } from "../contact-links/contact-links";
import { HeaderBox } from "../header-box/header-box";

export const Footer: FC = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <Box bg={bg} py={8}>
      <Container maxW="container.lg">
        <HeaderBox title="Let's Connect">
          <ContactLinks />
        </HeaderBox>
        <Flex pt={12} align="center">
          <Text flex={1} variant="sub">
            ©{new Date().getFullYear()} alcuria.net
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};
