import { Flex, Badge, useColorModeValue } from "@chakra-ui/react";
import { FC } from "react";
import { TagListProps } from "./tag-list.props";

export const TagList: FC<TagListProps> = ({ tags, ...props }) => {
  return (
    <Flex direction="row" wrap={"wrap"}>
      {tags.map((tag) => (
        <Badge key={tag} mr={2} my={4} {...props}>
          {tag}
        </Badge>
      ))}
    </Flex>
  );
};
