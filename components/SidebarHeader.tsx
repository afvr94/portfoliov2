import { Flex, Image, Text } from '@chakra-ui/react';

const SidebarHeader = () => {
  return (
    <Flex align="center" justify="center" direction="column">
      <Image
        src="https://abdielvegabucket.s3.amazonaws.com/1639234866541.jpeg"
        boxSize="90px"
        boxShadow="2xl"
        borderRadius="100%"
      />
      <Text marginTop="5px" fontSize="lg" fontWeight="bold" color="white">
        Abdiel F. Vega Ramos
      </Text>
      <Text marginTop="5px" fontSize="sm" color="white">
        Fullstack developer
      </Text>
      <Text marginTop="5px" fontSize="sm" color="white">
        4+ years of experience
      </Text>
    </Flex>
  );
};

export default SidebarHeader;
