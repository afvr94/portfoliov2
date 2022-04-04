import { Box, Flex, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

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
    >
      <Box
        bgGradient="linear(90deg, rgba(45, 45, 58, 0.9) 15%, rgba(45, 45, 58, 0.7) 50%, rgba(43, 43, 53, 0.7) 100%)"
        height="100%"
        padding="20px"
      >
        <Flex>
          <Box>
            <Text
              fontSize="6xl"
              fontWeight="bold"
              color="white"
              textAlign="left"
            >
              Discover all about me and my work!
            </Text>
            <Flex>
              <Text color="white" fontSize="2xl" fontFamily="monospace">
                &lt;
                <Text as="span" color="yellow.300">
                  code
                </Text>
                &gt; I build
              </Text>
              <Box
                color="white"
                fontSize="2xl"
                marginX="5px"
                fontFamily="monospace"
              >
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("robust apis!")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("amazing and responsive websites!")
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Box>
              <Text color="white" fontSize="2xl" fontFamily="monospace">
                &lt;/
                <Text as="span" color="yellow.300">
                  code
                </Text>
                &gt;
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomeHeader;
