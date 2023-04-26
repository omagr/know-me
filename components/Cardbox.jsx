import React from 'react';
import { Icons } from '../Constants/utility';
import Image from 'next/image';
import {
  Card,
  Button,
  CardBody,
  Heading,
  Text,
  Box,
  HStack,
  TagLabel,
  Tag,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

const Cardbox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Card

        width='294px'
        height='223px'
        backgroundColor='#EDE0E1'
        borderRadius='16px'>
        <CardBody
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='center'
          padding='12px 16px'
          borderRadius='12px'
          color='brand.tl'
          backgroundColor='brand.bg'
          border='1px solid #16161A'
          zIndex={10}
          gap='16px'>
          <Image src={Icons.ext.demo} alt='demo' width={80} height={80} />
          <VStack alignItems='flex-start' gap='8px'>
            <Heading
              fontFamily='xbold'
              fontSize='12px'
              lineHeight='15px'
              textAlign='center'
              color='brand.ta'>
              Irish Players Club.
            </Heading>
            <Text
              fontFamily='semi'
              fontSize='8px'
              lineHeight='8px'
              textTransform='lowercase'
              color='brand.ta'>
              This is good. Once check the last but one card, the line which shows 12
              the line which shows 12. the line which shows 12 the line which shows 12.
            </Text>
            <HStack spacing='10px'>
              <Tag
                textAlign='center'
                background='#EDE0E1'
                border='1px solid #16161A'
                borderRadius='6px'
                padding='6px'>
                <TagLabel
                  fontFamily='semi'
                  fontSize='9px'
                  letterSpacing='0.05em'
                  textTransform='lowercase'
                  color='brand.ta'>
                  react.js
                </TagLabel>
              </Tag>
              <Tag
                textAlign='center'
                background='#EDE0E1'
                border='1px solid #16161A'
                borderRadius='6px'
                padding='6px'>
                <TagLabel
                  fontFamily='semi'
                  fontSize='9px'
                  letterSpacing='0.05em'
                  textTransform='lowercase'
                  color='brand.ta'>
                  react.js
                </TagLabel>
              </Tag>
              <Tag
                textAlign='center'
                background='#EDE0E1'
                border='1px solid #16161A'
                borderRadius='6px'
                padding='6px'>
                <TagLabel
                  fontFamily='semi'
                  fontSize='9px'
                  letterSpacing='0.05em'
                  textTransform='lowercase'
                  color='brand.ta'>
                  react.js
                </TagLabel>
              </Tag>
            </HStack>
            <HStack spacing='10px'>
              <Button
                onClick={onOpen}
                color='brand.bl'
                borderRadius='12px'
                padding='2px 4px'
                border='2px solid #7F5AF0'
                bg='transparent'
                _hover={{
                  bg: 'brand.tl',
                }}
                size='sm'>

                <i
                  style={{ fontWeight: '200', fontSize: '20px' }}
                  className='ri-arrow-right-up-fill hover:translate-y-[-2px] hover:translate-x-[2px] '></i>
              </Button>
            </HStack>
          </VStack>
        </CardBody>
        <Box
          zIndex={0}
          position='absolute'
          border='1px solid #16161A'
          width='294px'
          height='223px'
          borderRadius='16px'
          top='12px'
          left='12px'></Box>
      </Card>
      <Modal

        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent
          style={{
            background: '#EDE0E1',
            border: '1px solid #1E1E1E',
            borderRadius: '24px 24px 0 0',
            width: '100%',
            height: '100%',
            marginBottom: '0px',
          }}>
          <ModalHeader display='grid' placeContent='center'>
            <Text
              borderBottom='1px solid black'
              width='fit-content'
              fontFamily='bold'
              fontSize='20px'
              lineSeight='24px'
              text-align='center'
              letterSpacing='0.02em'
              color='brand.td'>
              Modal Title
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p='0 48px' display='flex' flexDirection='column' gap='16px'>
            <VStack>
              <Image
                src={Icons.ext.demo}
                alt='Github'
                style={{ width: '180px' }}
                loading='lazy'
              />
            </VStack>
            <VStack alignItems='flex-start'>
              <Heading
                display='flex'
                flexDirection='row'
                alignItems='center'
                gap='8px'>
                <Text
                  fontFamily='xbold'
                  fontSize='16px'
                  color='brand.td'
                  letterSpacing='0.05em'>
                  Description,
                </Text>
              </Heading>
              <Text
                fontFamily='semi'
                fontSize='12px'
                lineHeight='150%'
                textTransform='lowercase'
                wordBreak='break-word'
                color='brand.td'>
                This is good. Once check the last but one card, the line which shows 12
                the line which shows 12. the line which shows 12 the line which shows 12
                <br />
                This is good. Once check the last but one card, the line which shows 12
                the line which shows 12. the line which shows 12 the line which shows
                12.This is good.
              </Text>
            </VStack>
            <VStack alignItems='flex-start'>
              <Heading
                display='flex'
                flexDirection='row'
                alignItems='center'
                gap='8px'>
                <Text
                  fontFamily='xbold'
                  fontSize='16px'
                  color='brand.td'
                  letterSpacing='0.05em'>
                  Tech-stack,
                </Text>
              </Heading>
              <HStack spacing='10px'>
                <Tag
                  textAlign='center'
                  background='#EDE0E1'
                  border='1px solid #16161A'
                  borderRadius='6px'
                  padding='6px 12px'>
                  <TagLabel
                    fontFamily='semi'
                    fontSize='9px'
                    letterSpacing='0.05em'
                    textTransform='lowercase'
                    color='brand.ta'>
                    react.js
                  </TagLabel>
                </Tag>
                <Tag
                  textAlign='center'
                  background='#EDE0E1'
                  border='1px solid #16161A'
                  borderRadius='6px'
                  padding='6px 12px'>
                  <TagLabel
                    fontFamily='semi'
                    fontSize='9px'
                    letterSpacing='0.05em'
                    textTransform='lowercase'
                    color='brand.ta'>
                    react.js
                  </TagLabel>
                </Tag>
                <Tag
                  textAlign='center'
                  background='#EDE0E1'
                  border='1px solid #16161A'
                  borderRadius='6px'
                  padding='6px 12px'>
                  <TagLabel
                    fontFamily='semi'
                    fontSize='9px'
                    letterSpacing='0.05em'
                    textTransform='lowercase'
                    color='brand.ta'>
                    react.js
                  </TagLabel>
                </Tag>
              </HStack>
            </VStack>
            <VStack alignItems='flex-start'>
              <Heading
                display='flex'
                flexDirection='row'
                alignItems='center'
                gap='8px'>
                <Text
                  fontFamily='xbold'
                  fontSize='16px'
                  color='brand.td'
                  letterSpacing='0.05em'>
                  Created on,
                </Text>
              </Heading>
              <Text
                fontFamily='semi'
                fontSize='12px'
                lineHeight='150%'
                wordBreak='break-word'
                color='brand.td'>
                Feb-2022
              </Text>
            </VStack>
            <VStack alignItems='flex-start' spacing='16px'>
              <Button
                p='24px'
                width='100%'
                bg='brand.bl'
                textAlign='center'
                borderRadius='48px'
                outline='1px solid'
                borderColor='brand.td'
                onClick={onClose}>
                <Text
                  fontFamily='semi'
                  fontSize='12px'
                  lineHeight='12px'
                  letterSpacing='0.02em'
                  color='brand.td'>
                  view demo
                </Text>
                <Image
                  src={Icons.ext.exploredark}
                  alt='explore'
                  style={{ width: '12px', marginLeft: '8px' }}
                />
              </Button>
              <Button
                p='24px'
                width='100%'
                bg='transparent'
                textAlign='center'
                borderRadius='48px'
                outline='1px solid'
                borderColor='brand.td'
                onClick={onClose}>
                <Text
                  fontFamily='semi'
                  fontSize='12px'
                  lineHeight='12px'
                  letterSpacing='0.02em'
                  color='brand.td'>
                  view code
                </Text>
                <Image
                  src={Icons.socials.github}
                  alt='explore'
                  style={{ width: '16px', marginLeft: '8px' }}
                />
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Cardbox;
