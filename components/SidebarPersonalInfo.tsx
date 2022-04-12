import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { getAge } from '../lib/helpers';

const SidebarPersonalInfo = () => {
  const myAge = getAge('1994/02/01');

  return (
    <Box>
      <Flex>
        <Text fontSize="sm" fontWeight="bold" color="white">
          Residence:
        </Text>
        <Text marginLeft="auto" color="gray.400">
          Florida
        </Text>
      </Flex>
      <Flex>
        <Text fontSize="sm" fontWeight="bold" color="white">
          City:
        </Text>
        <Text marginLeft="auto" color="gray.400">
          Minneola
        </Text>
      </Flex>
      <Flex>
        <Text fontSize="sm" fontWeight="bold" color="white">
          Age:
        </Text>
        <Text marginLeft="auto" color="gray.400">
          {myAge}
        </Text>
      </Flex>
    </Box>
  );
};

export default SidebarPersonalInfo;
