import { Inter } from "@next/font/google";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Praise } from "../components/praise/praise";
import { SessionsWork } from "../components/sessions-work/sessions-work";
import { SessionsLinks } from "../components/sessions-links/sessions-links";

const inter = Inter({ subsets: ["latin"] });

export default function Sessions() {
  return (
    <>
      <Header />
      <SessionsWork />
      <SessionsLinks />
      <Praise />
      <Footer />
    </>
  );
}

export { getServerSideProps } from "../components/chakra";
