import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { Icons } from "../Constants/utility";
import { navWin } from "../pages/_app";
import navStyle from "../styles/Nav.module.css";

const Navbar = () => {
  const [navWindow, set_navWindow] = useContext(navWin);
  return (
    <nav style={{ padding: '0 24px' }} className={navStyle.mainConNav}>
      <HStack
        zIndex={100}
        position="relative"
        spacing="24px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Link href="/">
            <Image

              src={Icons.ext.logo}
              alt="Picture of the logo"
              width={48}
              height={48}
            />
          </Link>
        </Box>
        <Box>
          <button onClick={() => { set_navWindow(!navWindow) }} className='mr-[-18px]'>
            <svg
              className={`${navStyle.ham} ${navStyle.hamRotate} ${navStyle.ham4} ${navWindow && navStyle.active}`}
              viewBox="0 0 100 100"
              width="80"
            >
              <path
                className={`${navStyle.line} ${navStyle.top}`}
                d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
              />
              <path className={`${navStyle.line} ${navStyle.middle}`} d="m 70,50 h -40" />
              <path
                className={`${navStyle.line} ${navStyle.bottom}`}
                d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
              />
            </svg>
          </button>
        </Box>
      </HStack>
    </nav>
  );
};

export default Navbar;
