import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react";
import { navWin } from "../pages/_app";

const NavWinddow = () => {
  const [navWindow, set_navWindow] = useContext(navWin);
  if (navWindow) {
    return (
      <Box

        bg="brand.bg"
        color="brand.tl"
        position="absolute"
        width="100%"
        height="100vh"
        top="-20px"
        left="0"
        zIndex="90"
      >
        <Box position="absolute" right="42px" bottom="120px">
          <Link className="cursor-pointer" href="/about" cursor="pointer" onClick={() => set_navWindow(!navWindow)}>
            <Heading
              className="cursor-pointer"
              as="h1"
              fontFamily="xbold"
              fontSize="6xl"
              textAlign="right"
            >

              About
            </Heading>
          </Link>
          <Link className="cursor-pointer" href="/portfolio" cursor="pointer" onClick={() => set_navWindow(!navWindow)}>
            <Heading
              className="cursor-pointer"
              as="h1"
              fontFamily="xbold"
              fontSize="6xl"
              textAlign="right"
            >
              Portfolio
            </Heading>
          </Link>
          <Link className="cursor-pointer" href="/socials" cursor="pointer" onClick={() => set_navWindow(!navWindow)}>
            <Heading
              className="cursor-pointer"
              as="h1"
              fontFamily="xbold"
              fontSize="6xl"
              textAlign="right"
            >
              Socials
            </Heading>
          </Link>
        </Box>
      </Box>
    );
  }
};
export default NavWinddow;
