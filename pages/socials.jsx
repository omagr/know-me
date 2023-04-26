import { HStack, VStack, Box, Heading, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '../Constants/utility';
import style from '../styles/home.module.css';

const social = () => {
  return (
    <VStack className={style.mainCon}>
      <HStack w="100%" justifyContent="space-evenly">
        <Link href="#" target="_blank">
          <Box
            w="55px"
            h="670px"
            border="1px solid #16161A"
            color="#BD5959"
            borderRadius="8px 8px 0px 0px"
            background="linear-gradient(to top, #BD5959 50%, #EDE0E1 50%)"
            backgroundSize="100% 200%"
            backgroundPosition="top"
            transition="all 0.5s ease-out"
            _hover={{
              color: '#16161A',
              backgroundPosition: 'bottom',
            }}
          >
            <div className="h-[10%] pt-[32px] pl-[4px]">
              <Image
                src={Icons.socials.instagram}
                alt="arrow"
                width={24}
                height={24}
                style={{
                  transform: 'scale(0.75)',
                }}
              ></Image>
            </div>

            <div className="h-[90%] flex flex-row justify-center items-center">
              <div className="h-[30%] flex flex-row justify-center items-center ">
                <Box
                  className="h-3/4 flex flex-row justify-center items-center gap-[24px]"
                  style={{ transform: 'rotate(-90deg)' }}
                >
                  <Image
                    src={Icons.ext.arrow}
                    alt="arrow"
                    width={12}
                    style={{
                      transform: 'rotate(90deg)',
                    }}
                  ></Image>
                  <Heading
                    as="h2"
                    size="3xl"
                    overflow="visible"
                    fontFamily="bold"
                    fontSize="22px"
                    transition="all 0.1s ease-out"
                    style={{
                      marginTop: '-6px',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Instagram
                  </Heading>
                </Box>
              </div>
            </div>
          </Box>
        </Link>
        <Link href="#" target="_blank">
          <Box
            w="55px"
            h="670px"
            border="1px solid #16161A"
            color="#595DBD"
            borderRadius="8px 8px 0px 0px"
            background="linear-gradient(to top, #595DBD 50%, #EDE0E1 50%)"
            backgroundSize="100% 200%"
            backgroundPosition="top"
            transition="all 0.5s ease-out"
            _hover={{
              color: '#16161A',
              backgroundPosition: 'bottom',
            }}
          >
            <div className="h-[10%] pt-[32px] pl-[4px]">
              <Image
                src={Icons.socials.twitter}
                alt="arrow"
                width={24}
                height={24}
                style={{
                  transform: 'scale(0.75)',
                }}
              ></Image>
            </div>
            <div className="h-[90%] flex flex-row justify-center items-center">
              <div className="h-[30%] flex flex-row justify-center items-end pb-[8px]">
                <Box
                  className="h-3/4 flex flex-row justify-center items-center gap-[24px]"
                  style={{ transform: 'rotate(-90deg)' }}
                >
                  <Image
                    src={Icons.ext.arrow}
                    alt="arrow"
                    width={12}
                    style={{
                      transform: 'rotate(90deg)',
                    }}
                  ></Image>
                  <Heading
                    as="h2"
                    size="3xl"
                    overflow="visible"
                    fontFamily="bold"
                    fontSize="22px"
                    transition="all 0.1s ease-out"
                    style={{
                      marginTop: '-6px',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Twitter
                  </Heading>
                </Box>
              </div>
            </div>
          </Box>
        </Link>
        <Link href="#" target="_blank">
          <Box
            w="55px"
            h="670px"
            border="1px solid #16161A"
            color="#16161A"
            borderRadius="8px 8px 0px 0px"
            background="linear-gradient(to top, #16161A 50%, #EDE0E1 50%)"
            backgroundSize="100% 200%"
            backgroundPosition="top"
            transition="all 0.5s ease-out"
            _hover={{
              color: '#EDE0E1',
              backgroundPosition: 'bottom',
            }}
          >
            <div className="h-[10%] pt-[32px] pl-[4px]">
              <Image
                src={Icons.socials.github}
                alt="arrow"
                width={24}
                height={24}
                style={{
                  transform: 'scale(0.75)',
                }}
              ></Image>
            </div>
            <div className="h-[90%] flex flex-row justify-center items-center">
              <div className="h-[30%] flex flex-row justify-center items-end">
                <Box
                  className="h-3/4 flex flex-row justify-center items-center gap-[24px]"
                  style={{ transform: 'rotate(-90deg)' }}
                >
                  <Image
                    src={Icons.ext.arrow}
                    alt="arrow"
                    width={12}
                    style={{
                      transform: 'rotate(90deg)',
                      fill: '#EDE0E1',
                    }}
                  ></Image>
                  <Heading
                    as="h2"
                    size="3xl"
                    overflow="visible"
                    fontFamily="bold"
                    fontSize="22px"
                    transition="all 0.1s ease-out"
                    style={{
                      marginTop: '-6px',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      letterSpacing: '0.05em',
                    }}
                  >
                    GitHub
                  </Heading>
                </Box>
              </div>
            </div>
          </Box>
        </Link>
        <Link href="#" target="_blank">
          <Box
            w="55px"
            h="670px"
            border="1px solid #16161A"
            color="#4E70E9"
            borderRadius="8px 8px 0px 0px"
            background="linear-gradient(to top, #4E70E9 50%, #EDE0E1 50%)"
            backgroundSize="100% 200%"
            backgroundPosition="top"
            transition="all 0.5s ease-out"
            _hover={{
              color: '#16161A',
              backgroundPosition: 'bottom',
            }}
          >
            <div className="h-[10%] pt-[32px] pl-[4px]">
              <Image
                src={Icons.socials.linkedin}
                alt="arrow"
                width={24}
                height={24}
                style={{
                  transform: 'scale(0.75)',
                }}
              ></Image>
            </div>
            <div className="h-[90%] flex flex-row justify-center items-center">
              <div className="h-[30%] flex flex-row justify-center items-end pb-[16px]">
                <Box
                  className="h-3/4 flex flex-row justify-center items-center gap-[24px]"
                  style={{ transform: 'rotate(-90deg)' }}
                >
                  <Image
                    src={Icons.ext.arrow}
                    alt="arrow"
                    width={12}
                    style={{
                      transform: 'rotate(90deg)',
                    }}
                  ></Image>
                  <Heading
                    as="h2"
                    size="3xl"
                    overflow="visible"
                    fontFamily="bold"
                    fontSize="22px"
                    transition="all 0.1s ease-out"
                    style={{
                      marginTop: '-6px',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      letterSpacing: '0.05em',
                    }}
                  >
                    LinkedIn
                  </Heading>
                </Box>
              </div>
            </div>
          </Box>
        </Link>
        <Link href="#" target="_blank">
          <Box
            w="55px"
            h="670px"
            border="1px solid #16161A"
            color="#0057FF"
            borderRadius="8px 8px 0px 0px"
            background="linear-gradient(to top, #0057FF 50%, #EDE0E1 50%)"
            backgroundSize="100% 200%"
            backgroundPosition="top"
            transition="all 0.5s ease-out"
            _hover={{
              color: '#16161A',
              backgroundPosition: 'bottom',
            }}
          >
            <div className="h-[10%] pt-[32px] pl-[4px]">
              <Image
                src={Icons.socials.behance}
                alt="arrow"
                width={24}
                height={24}
                style={{
                  transform: 'scale(0.75)',
                }}
              ></Image>
            </div>

            <div className="h-[90%] flex flex-row justify-center items-center">
              <div className="h-[30%] flex flex-row justify-center items-end pb-[16px]">
                <Box
                  className="h-3/4 flex flex-row justify-center items-center gap-[24px]"
                  style={{ transform: 'rotate(-90deg)' }}
                >
                  <Image
                    src={Icons.ext.arrow}
                    alt="arrow"
                    width={12}
                    style={{
                      transform: 'rotate(90deg)',
                    }}
                  ></Image>
                  <Heading
                    as="h2"
                    size="3xl"
                    overflow="visible"
                    fontFamily="bold"
                    fontSize="22px"
                    transition="all 0.1s ease-out"
                    style={{
                      marginTop: '-6px',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Behance
                  </Heading>
                </Box>
              </div>
            </div>
          </Box>
        </Link>
      </HStack>
      <hr
        style={{
          width: '90%',
          backgroundColor: '#16161A',
          marginTop: ' -1.5px',
        }}
      />
      <VStack w="100%" padding="0 12px 32px 12px">
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          gap="24px"
          justifyContent="flex-start"
        >
          <Text
            fontFamily="bold"
            fontSize="12px"
            color="brand.td"
            letterSpacing="0.05em"
          >
            Email me at{' '}
          </Text>
          <Image
            src={Icons.ext.arrow}
            alt="arrow"
            width={12}
            height={12}
            style={{
              transform: 'rotate(90deg)',
            }}
          />
        </Box>
        <Button
          w="100%"
          fontFamily="semi"
          fontSize="14px"
          padding="4px 0"
          textAlign="center"
          variant="outline"
          color="brand.td"
          borderColor="brand.td"
          borderRadius="12px"
        >
          omag.about@gmail.com
        </Button>
      </VStack>
    </VStack>
  );
};

export default social;
