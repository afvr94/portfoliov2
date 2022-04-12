import { Box, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <>
      <Text fontWeight="bold" fontSize="2xl" color="white">
        About
      </Text>
      <Box
        marginTop="15px"
        height="auto"
        padding="40px"
        bg="linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)"
        color="white"
      >
        <Text fontSize="4xl" fontWeight="bold" color="yellow.400">
          Hi! My name is Abdiel,
        </Text>
        <Box marginTop="10px">
          <Text fontSize="lg" fontWeight="normal">
            I&apos;m a full-stack engineer, and I graduated from the University of Puerto Rico in
            Mayagüez with a degree in Computer Engineering. I love to create projects that make an
            impact on society. I&apos;m interested in the whole frontend stack like React + Redux,
            etc. To build unique projects and bring designs to life. Also, I&apos;m interested in
            the Python + NodeJS stacks for the backend. I&apos;m a fitness freak, and I like to
            weightlift and do cycling. I love to explore and learn new topics in engineering.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default About;
