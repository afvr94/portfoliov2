import { Box, Flex, Text, Progress as ChakraProgress } from "@chakra-ui/react";
import React, { FC } from "react";

const Progress: FC<{ text: string; value: number }> = ({ text, value }) => {
  return (
    <Box>
      <Flex justify="space-between">
        <Text fontWeight="bold" fontSize="x-small" color="white">
          {text}
        </Text>
        <Text color="gray.400" fontSize="x-small">
          {value}%
        </Text>
      </Flex>
      <ChakraProgress value={value} size="xs" marginTop="5px" />
    </Box>
  );
};

export default Progress;
