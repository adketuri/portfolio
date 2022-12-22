import { Box, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { ColorModeButton } from "../color-mode-button";
import { HeaderBox } from "../header-box/header-box";

export const Footer: FC = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <Flex bg={bg} direction="column" align="end">
      <ColorModeButton />
    </Flex>
  );
};
