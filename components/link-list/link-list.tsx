import NextLink from "next/link";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FC } from "react";
import { LinkListProps } from "./link-list.props";

export const LinkList: FC<LinkListProps> = ({ links }) => {
  return (
    <Flex wrap={"wrap"}>
      {links.map((link, i) => (
        <Text style={{ whiteSpace: "pre-wrap" }} key={link.url}>
          {!!i && " / "}
          <Link
            id={link.url}
            as={NextLink}
            isExternal={link.external}
            href={link.url}
            variant="outgoing"
          >
            {link.text}
          </Link>
        </Text>
      ))}
    </Flex>
  );
};
