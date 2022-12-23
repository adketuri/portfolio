import { Flex, Spacer, Link } from "@chakra-ui/react";
import { FC } from "react";
import { LinkList } from "../link-list/link-list";
import NextLink from "next/link";
import { EmailIcon } from "@chakra-ui/icons";
import { LinkItem } from "../link-list/link-list.props";

const links: LinkItem[] = [
  {
    text: "resume",
    url: "../../andrew_keturi_resume.pdf",
    external: true,
  },
  { text: "github", url: "https://github.com/adketuri", external: true },
  {
    text: "stackoverflow",
    url: "https://stackoverflow.com/users/2158740/adketuri",
    external: true,
  },
  {
    text: "linkedin",
    url: "https://www.linkedin.com/in/andrewketuri",
    external: true,
  },
];

export const ContactLinks: FC = () => {
  return (
    <>
      <Flex align="center">
        <EmailIcon mr={2} />
        <Link as={NextLink} href={"mailto:adketuri@gmail.com"}>
          adketuri@gmail.com
        </Link>
      </Flex>
      <Spacer h={1} />
      <LinkList links={links} />
    </>
  );
};
