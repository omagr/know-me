import { Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { Icons } from "../Constants/utility";

const Socials = () => {
  return (
    <HStack
    padding='32px 0'
      zIndex={80}
      position="absolute"
      spacing="24px"
      justifyContent="center"
      alignItems="center"
      bottom="-50px"
      right="32px"
    >
      <Box borderRadius='100%' bg='brand.bl' padding={2} >
        <Image
          src={Icons.socials.twitter}
          alt="twitter"
          width={16}
          height={16}
        />
      </Box>
      <Box borderRadius='100%' bg='brand.bl' padding={2} style={{ marginLeft: '12px' }}>
        <Image

          src={Icons.socials.linkedin}
          alt="twitter"
          width={16}
          height={16}
        />
      </Box>
      <Box borderRadius='100%' bg='brand.bl' padding={2} style={{ marginLeft: '12px' }}>
        <Image
          src={Icons.socials.github}
          alt="twitter"
          width={16}
          height={16}
        />
      </Box>
    </HStack>
  );
};

export default Socials;
