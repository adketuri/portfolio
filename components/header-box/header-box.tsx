import { Heading, Box, Text, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { HeaderBoxProps } from "./header-box.props";

export const HeaderBox: FC<HeaderBoxProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Box flex={1} m={4}>
      <Heading size="lg">{title}</Heading>
      {description && <Text>{description}</Text>}
      {children}
    </Box>
  );
};
