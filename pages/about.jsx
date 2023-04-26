import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { Icons } from '../Constants/utility';
import style from '../styles/home.module.css';

const about = () => {
  return (
    <Box className={style.top}>
      <Heading>
        <HStack gap='24px'>
          <Text
            fontSize='28px'
            fontFamily='xbold'
            color='brand.td'
            fontStyle='normal'
            fontWeight='900'
            lineHeight='56px'
            style={{
              letterSpacing: '0.02em',
              marginLeft: '4px',
            }}>
            I'm
          </Text>
        </HStack>
        <Text
          fontSize='60px'
          fontFamily='xbold'
          color='brand.td'
          fontStyle='normal'
          fontWeight='800'
          style={{
            letterSpacing: '0.02em',
            marginTop: '-20px',
          }}>
          Om Agarwal
        </Text>
        <Text
          fontFamily='Mono'
          color='brand.td'
          fontStyle='italic'
          fontWeight='600'
          fontSize='16px'
          lineHeight='8px'
          marginTop='10px'>
          ————— developer, designer & modeler.
        </Text>
      </Heading>
      <VStack w='360px' mt='28px' gap='28px'>
        <VStack gap='8px' alignItems='flex-start'>
          <Heading
            fontFamily='bold'
            fontSize='18px'
            lineHeight='22px'
            color='brand.bl'
            letterSpacing='0.05em'>
            About me
          </Heading>
          <Text
            fontFamily='book'
            fontSize='16px'
            lineHeight='150%'
            textTransform='lowercase'
            style={{ wordSpacing: '0.1em', letterSpacing: '0.1em' }}
            wordBreak='break-word'
            color='brand.td'>
            {' '}
            I’m a freelance front-end developer who cares deeply about the user
            experience and has a serious passion for UI design and new technologies. I
            love to build high-performance, richly interactive websites that work
            across all platforms and devices. I design minimal user interfaces and
            sometimes make 3D models as well.
          </Text>
        </VStack>
        <VStack gap='20px' alignItems='flex-start'>
          <Heading
            fontFamily='bold'
            fontSize='18px'
            lineHeight='22px'
            color='brand.bl'
            letterSpacing='0.05em'>
            what i do ?
          </Heading>
          <VStack alignItems='flex-start' >
            <Heading display='flex' flexDirection='row' alignItems='center' gap='8px'>
              <Image
                src={Icons.ext.code}
                width={18}
                height={18}
              />
              <Text
                fontFamily='bold'
                fontSize='16px'
                color='brand.td'
                letterSpacing='0.05em'>
                Front-end Development
              </Text>
            </Heading>
            <Text
              fontFamily='book'
              fontSize='16px'
              lineHeight='150%'
              textTransform='lowercase'
              style={{ wordSpacing: '0.1em', letterSpacing: '0.1em' }}
              wordBreak='break-word'
              color='brand.td'>
              I have a strong understanding of the user experience needed to create visually appealing and functional websites. I am a creative problem solver and am able to troubleshoot and debug code to ensure that websites and applications are of the highest quality.
            </Text>
          </VStack>
          <VStack alignItems='flex-start'>
            <Heading display='flex' flexDirection='row' alignItems='center' gap='8px'>
              <Image
                src={Icons.ext.ui}
                width={18}
                height={18}
              />
              <Text
                fontFamily='bold'
                fontSize='16px'
                color='brand.td'
                letterSpacing='0.05em'>
                UI Designing
              </Text>
            </Heading>
            <Text
              fontFamily='book'
              fontSize='16px'
              lineHeight='150%'
              textTransform='lowercase'
              style={{ wordSpacing: '0.1em', letterSpacing: '0.1em' }}
              wordBreak='break-word'
              color='brand.td'>
              I design delightful user experiences and user interfaces for web and mobile products. This includes creating wireframes, prototypes, and high-fidelity designs that communicate the layout, flow, and functionality of the user interface. I use a combination of design principles, user research, and technical skills to create interfaces that are intuitive, efficient, minimal, and aesthetically pleasing.
            </Text>
          </VStack>
          <VStack alignItems='flex-start'>
            <Heading display='flex' flexDirection='row' alignItems='center' gap='8px'>
              <Image
                src={Icons.ext.model}
                width={18}
                height={18}
              />
              <Text
                fontFamily='bold'
                fontSize='16px'
                color='brand.td'
                letterSpacing='0.05em'>
                3D Modeling
              </Text>
            </Heading>
            <Text
              fontFamily='book'
              fontSize='16px'
              lineHeight='150%'
              textTransform='lowercase'
              style={{ wordSpacing: '0.1em', letterSpacing: '0.1em' }}
              wordBreak='break-word'
              color='brand.td'>
              I use specialised software to create three-dimensional models. This involves using various tools and techniques to create a digital representation of an object, character, or environment in three dimensions. These models can then be used for a variety of purposes, such as animation, visualization, or special effects.
            </Text>
          </VStack>
        </VStack>
        <VStack gap='20px' alignItems='flex-start'>
          <Heading
            fontFamily='bold'
            fontSize='18px'
            lineHeight='22px'
            color='brand.bl'
            letterSpacing='0.05em'>
            what i know ?
          </Heading>
          <VStack alignItems='flex-start' gap='12px'>
            <Heading display='flex' flexDirection='row' alignItems='center' gap='8px'>
              <Text
                fontFamily='bold'
                fontSize='16px'
                color='brand.td'
                letterSpacing='0.05em'>
                Programming Languages
              </Text>
            </Heading>
            <HStack gap='4px' alignItems='center'>
              {
                Icons.lang.map((item, i) => <Image key={i} src={item} width={32} height={32} alt='lang' style={{ objectFit: "contain", margin: 0 }} />)
              }
            </HStack>
          </VStack>
          <VStack alignItems='flex-start' gap='12px'>
            <Heading display='flex' flexDirection='row' alignItems='center' gap='8px'>
              <Text
                fontFamily='bold'
                fontSize='16px'
                color='brand.td'
                letterSpacing='0.05em'>
                Technologies & Framworks
              </Text>
            </Heading>
            <HStack gap='8px' rowGap='16px' alignItems='center' flexWrap='wrap'>
              {
                Icons.framworks.map((item, i) => <Image key={i} src={item} width={32} height={32} alt='lang' style={{ objectFit: "contain", margin: 0 }} />)
              }
            </HStack>
          </VStack>
          <VStack alignItems='flex-start' gap='12px'>
            <Heading display='flex' flexDirection='row' alignItems='center' gap='8px'>
              <Text
                fontFamily='bold'
                fontSize='16px'
                color='brand.td'
                letterSpacing='0.05em'>
                Software & Tools
              </Text>
            </Heading>
            <HStack gap='4px' alignItems='center' >
              {
                Icons.tools.map((item, i) => <Image key={i} src={item} width={32} height={32} alt='lang' />)
              }
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </Box >
  );
};

export default about;
