import Image from 'next/image';
import { Icons } from '../Constants/utility';
import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import Cardbox from '../components/Cardbox';
import style from '../styles/home.module.css';
import Socials from '../components/Socials';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import Link from 'next/link';

const Home = () => {
  return (
    <main className={style.main}>
      <Box className={style.top}>
        <Heading>
          <Text
            fontFamily="xbold"
            color="brand.td"
            style={{
              fontStyle: 'normal',
              fontWeight: 800,
              fontSize: '28px',
              lineHeight: '34px',
              letterSpacing: '0.02em',
              marginLeft: '12px',
            }}
          >
            hi,
          </Text>
          <HStack gap="12px">
            <Text
              fontSize="70px"
              fontFamily="xbold"
              color="brand.td"
              fontStyle="normal"
              fontWeight="900"
              style={{
                lineHeight: '84px',
                letterSpacing: '0.02em',
              }}
            >
              Om
            </Text>
            <Text
              fontSize="10px"
              fontFamily="semi"
              color="brand.td"
              fontStyle="normal"
              fontWeight="600"
              style={{
                lineHeight: '12px',
                textTransform: 'lowercase',
                letterSpacing: '0.02em',
                margin: '16px 0 0 0',
              }}
            >
              A front-end developer who cares deeply about the user experience,
              serious passion for UI design and sometimes I make 3D models as
              well.
            </Text>
          </HStack>

          <Text
            fontSize="90px"
            fontFamily="xbold"
            color="brand.td"
            fontStyle="normal"
            fontWeight="800"
            style={{
              lineHeight: '108px',
              letterSpacing: '0.02em',
              marginTop: '-20px',
            }}
          >
            Agarwal
          </Text>

          <Text
            fontFamily="Mono"
            color="brand.td"
            fontStyle="italic"
            fontWeight="600"
            fontSize="16px"
            lineHeight="19px"
            marginTop="10px"
          >
            ————— developer, designer & modeler.
          </Text>
        </Heading>
        <Link href='/portfolio'>

          <Button
            className="hover:translate-y-[-2px] hover:translate-x-[2px]"
            marginTop="32px"
            variant="solid"
            w="100%"
            border="0.75px solid #1E1E1E"
            bg="brand.bl"
            borderRadius="48px"
            padding="12px auto"
            textAlign="center"
            _hover={{
              bg: 'transparent',
              color: 'brand.tl',
            }}
            _active={{
              bg: 'transparent',
              color: 'brand.tl',
            }}
          >
            <Text
              fontFamily="semi"
              fontSize="10px"
              color="brand.td"
              fontStyle="normal"
              fontWeight="800"
              style={{
                lineHeight: '11px',
                /* identical to box height */
                letterSpacing: '0.02em',
              }}
            >
              Portfolio
            </Text>


          </Button>
        </Link>
        <HStack mt="30px" ml="80px" zIndex="50" height="24px">
          <Text
            fontSize="lg"
            color="brand.td"
            fontFamily="bold"
            style={{
              fontSize: '16px',
              lineHeight: '19px',
              letterSpacing: '0.05em',
            }}
          >
            Recent projects
          </Text>
          <Image
            src={Icons.ext.arrow}
            alt="arrow"
            width={16}
            height={16}
            style={{
              transform: 'rotate(90deg) scale(0.7)',
              marginLeft: '10px',
            }}
          />
        </HStack>
        <Swiper
          direction={'horizontal'}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>{<Cardbox />}</SwiperSlide>
          <SwiperSlide>{<Cardbox />}</SwiperSlide>
          <SwiperSlide>{<Cardbox />}</SwiperSlide>
          <SwiperSlide>{<Cardbox />}</SwiperSlide>
          <SwiperSlide>{<Cardbox />}</SwiperSlide>
          <SwiperSlide>{<Cardbox />}</SwiperSlide>
          <SwiperSlide>{<Cardbox />}</SwiperSlide>
          <SwiperSlide>{<Cardbox />}</SwiperSlide>
          <SwiperSlide>{<Cardbox />}</SwiperSlide>
          <SwiperSlide>{<Cardbox />}</SwiperSlide>
        </Swiper>
      </Box>
      <Socials />
    </main>
  );
};

export default Home;
