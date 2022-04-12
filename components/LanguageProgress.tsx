import { Box, CircularProgress, CircularProgressLabel, Text } from '@chakra-ui/react';
import { FC } from 'react';

const LanguageProgress: FC<{ text: string; value: number }> = ({ text, value }) => {
  return (
    <Box>
      <CircularProgress value={value} color="yellow.400" thickness="7px">
        <CircularProgressLabel color="gray.400" fontWeight="light">
          {value}%
        </CircularProgressLabel>
      </CircularProgress>
      <Box marginTop="5px">
        <Text fontWeight="bold" color="white" fontSize="sm">
          {text}
        </Text>
      </Box>
    </Box>
  );
};

export default LanguageProgress;
