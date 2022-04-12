import { Box, Flex, Text } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

const HomeHeader = () => {
  return (
    <Box
      height="auto"
      padding="60px"
      bgImage="https://cdn.pixabay.com/photo/2018/09/12/20/48/castle-3673198_1280.jpg"
      transform="scale(1)"
      opacity="1"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      sx={{
        '@media (max-width: 920px)': {
          padding: '30px',
        },
      }}
    >
      <Box
        bgGradient="linear(90deg, rgba(45, 45, 58, 0.9) 15%, rgba(45, 45, 58, 0.7) 50%, rgba(43, 43, 53, 0.7) 100%)"
        height="100%"
        padding="20px"
      >
        <Flex>
          <Box>
            <Text fontSize="5xl" fontWeight="bold" color="white" textAlign="left">
              Discover all about me and my work!
            </Text>
            <Flex>
              <Box color="white" fontSize="2xl" marginX="5px" fontFamily="monospace">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('&lt;<span style="color: #ECC94B;">code</span>&gt; I build ')
                      .typeString('robust apis! &lt;/<span style="color: #ECC94B;">code</span>&gt;')
                      .pauseFor(2500)
                      .deleteChars(20)
                      .typeString(
                        ' amazing and responsive websites! &lt;/<span style="color: #ECC94B;">code</span>&gt;'
                      )
                      .pauseFor(2500)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomeHeader;
