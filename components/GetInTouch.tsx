import { Box, Text, Stack, Button } from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import isEmail from 'validator/lib/isEmail';
import fetcher from '../lib/fetcher';
import Input from './Input';
import Textarea from './Textarea';

const GetInTouch = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState(new Set<string>());
  const [isSuccess, setIsSuccess] = useState(false);

  const resetError = (prevState: Set<string>, key: string) => {
    const newErrors = new Set([...prevState]);
    newErrors.delete(key);
    return newErrors;
  };

  const handleOnEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setErrors((prevState) => resetError(prevState, 'email'));
    setEmail(event?.target.value);
  };

  const handleOnNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setErrors((prevState) => resetError(prevState, 'name'));
    setName(event?.target.value);
  };

  const handleOnMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setErrors((prevState) => resetError(prevState, 'message'));
    setMessage(event?.target.value);
  };

  const handleOnSubmit = async () => {
    const newErrors = new Set<string>();
    if (!isEmail(email)) {
      newErrors.add('email');
    }
    if (!name.length) {
      newErrors.add('name');
    }
    if (!message.length) {
      newErrors.add('message');
    }

    if (newErrors.size !== 0) {
      setErrors(newErrors);
      return;
    }
    try {
      await fetcher('/email', { message, name, email });
      setEmail('');
      setName('');
      setMessage('');
      setIsSuccess(true);
    } catch {
      setErrors(new Set('server'));
    }
  };

  useEffect(() => {
    if (errors.has('name') && name.length) {
      setErrors((prevState) => resetError(prevState, 'name'));
    }
    if (errors.has('email') && isEmail(email)) {
      setErrors((prevState) => resetError(prevState, 'email'));
    }
    if (errors.has('message') && message.length) {
      setErrors((prevState) => resetError(prevState, 'message'));
    }
  }, [email, errors, message.length, name.length]);

  return (
    <Box>
      <Box marginY="15px">
        <Text fontWeight="bold" fontSize="2xl" color="white">
          Get in touch
        </Text>
      </Box>
      <Stack
        spacing={4}
        padding="20px"
        boxShadow="0 3px 8px 0 rgba(15, 15, 20, 0.2)"
        bg="linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)"
      >
        <Input
          icon={<FaUser color="gray.50" />}
          placeholder="Name"
          type="text"
          value={name}
          onChange={handleOnNameChange}
          isInvalid={errors.has('name')}
          errorText="Name is required"
        />
        <Input
          icon={<MdEmail color="gray.50" />}
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleOnEmailChange}
          isInvalid={errors.has('email')}
          errorText="Email is required and must be a valid email"
        />
        <Textarea
          placeholder="Message..."
          value={message}
          onChange={handleOnMessageChange}
          isInvalid={errors.has('message')}
          errorText="Message is required"
        />
        <Button
          bg="yellow.400"
          color="blackAlpha.800"
          padding="4px"
          sx={{
            '&:hover': {
              bg: 'yellow.500',
            },
          }}
          onClick={handleOnSubmit}
        >
          Submit
        </Button>
        {isSuccess ? (
          <Text color="green.400" fontSize="sm">
            There message was delivered! Thank you!
          </Text>
        ) : null}
        {errors.has('server') ? (
          <Text color="red.400" fontSize="sm">
            There was an server error and the message was not delivered
          </Text>
        ) : null}
      </Stack>
    </Box>
  );
};

export default GetInTouch;
