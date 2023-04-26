import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import Cardbox from '../components/Cardbox';
import { HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { Icons } from '../Constants/utility';
import style from '../styles/home.module.css';

const portfolio = () => {
    return (

        <VStack className={style.mainCon}>
            <HStack
                mt='30px'
                ml='80px'
                zIndex='50'
                height='24px'
                w='100%'
                alignItems='center'>
                <Image src={Icons.ext.code} alt='arrow' width={24} height={24} />
                <Text
                    color='brand.td'
                    fontFamily='bold'
                    style={{
                        fontSize: '16px',
                        lineHeight: '19px',
                        letterSpacing: '0.05em',
                    }}>
                    Codes
                </Text>
                <Image
                    src={Icons.ext.arrow}
                    alt='arrow'
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
                className='mySwiper'>
                <SwiperSlide>{<Cardbox />}</SwiperSlide>
                <SwiperSlide>{<Cardbox />}</SwiperSlide>
                <SwiperSlide>{<Cardbox />}</SwiperSlide>
                <SwiperSlide>{<Cardbox />}</SwiperSlide>
                <SwiperSlide>{<Cardbox />}</SwiperSlide>
                <SwiperSlide>{<Cardbox />}</SwiperSlide>
                <SwiperSlide>{<Cardbox />}</SwiperSlide>
            </Swiper>

            <HStack
                mt='30px'
                style={{ marginLeft: '80px' }}
                zIndex='50'
                height='24px'
                w='100%'
                alignItems='center'>
                <Image src={Icons.ext.ui} alt='arrow' width={24} height={24} />
                <Text
                    color='brand.td'
                    fontFamily='bold'
                    style={{
                        fontSize: '16px',
                        lineHeight: '19px',
                        letterSpacing: '0.05em',
                    }}>
                    Designs
                </Text>
                <Image
                    src={Icons.ext.arrow}
                    alt='arrow'
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
                className='mySwiper'>
                <SwiperSlide>{<Cardbox />}</SwiperSlide>
                <SwiperSlide>{<Cardbox />}</SwiperSlide>
                <SwiperSlide>{<Cardbox />}</SwiperSlide>
                <SwiperSlide>{<Cardbox />}</SwiperSlide>
                <SwiperSlide>{<Cardbox />}</SwiperSlide>
                <SwiperSlide>{<Cardbox />}</SwiperSlide>
                <SwiperSlide>{<Cardbox />}</SwiperSlide>
            </Swiper>

        </VStack>
    );
};

export default portfolio;
