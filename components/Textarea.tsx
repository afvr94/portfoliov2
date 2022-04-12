import { Textarea as ChakraTextarea, Box, Text } from '@chakra-ui/react';
import { ChangeEvent, FC } from 'react';

type Props = {
  placeholder: string;
  value: string;
  errorText?: string;
  isInvalid?: boolean;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea: FC<Props> = ({ placeholder, value, errorText, isInvalid, onChange }) => {
  return (
    <Box>
      <ChakraTextarea
        placeholder={placeholder}
        size="md"
        resize="vertical"
        borderRadius="0"
        border="0"
        bg="blackAlpha.800"
        color="white"
        padding="12px"
        value={value}
        onChange={onChange}
        isInvalid={isInvalid}
      />
      {isInvalid ? (
        <Text color="red.400" fontSize="sm">
          {errorText}
        </Text>
      ) : null}
    </Box>
  );
};

Textarea.defaultProps = {
  errorText: '',
  isInvalid: false,
};

export default Textarea;
