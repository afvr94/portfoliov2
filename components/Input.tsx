import { Box, Input as ChakraInput, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import { ChangeEvent, FC, ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  placeholder: string;
  type: string;
  value: string;
  errorText?: string;
  isInvalid?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({ icon, placeholder, type, value, isInvalid, errorText, onChange }) => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={icon}
          bg="blackAlpha.700"
          marginRight="10px"
        />
        <ChakraInput
          isInvalid={isInvalid}
          border="none"
          placeholder={placeholder}
          borderRadius="0"
          size="md"
          bg="blackAlpha.800"
          color="white"
          paddingLeft="48px"
          type={type}
          value={value}
          onChange={onChange}
        />
      </InputGroup>
      {isInvalid ? (
        <Text color="red.400" fontSize="sm">
          {errorText}
        </Text>
      ) : null}
    </Box>
  );
};

Input.defaultProps = {
  isInvalid: false,
  errorText: '',
};

export default Input;
