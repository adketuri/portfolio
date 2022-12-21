import NextLink from "next/link";
import { Flex, Link, Text } from "@chakra-ui/react";
import { FC } from "react";
import { LinkListProps } from "./link-list.props";

export const LinkList: FC<LinkListProps> = ({ links }) => {
  return (
    <Flex wrap={"wrap"}>
      {links.map((link, i) => (
        <>
          {!!i && <Text mx={1}>/</Text>}
          <Link
            id={link.url}
            as={NextLink}
            isExternal={link.external}
            href={link.url}
          >
            {link.text}
          </Link>
        </>
      ))}
    </Flex>
  );
};
