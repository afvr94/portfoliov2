import { Flex, IconButton, Link } from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const SocialBar = () => {
  return (
    <Flex align="center" justify="space-evenly">
      <Link href="https://github.com/afvr94" isExternal>
        <IconButton
          aria-label="Github"
          icon={<FaGithub />}
          bg="transparent"
          color="gray.400"
          sx={{
            '&:hover': {
              color: 'white',
              bg: 'transparent',
            },
          }}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/afvr94" isExternal>
        <IconButton
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          bg="transparent"
          color="gray.400"
          sx={{
            '&:hover': {
              color: 'white',
              bg: 'transparent',
            },
          }}
        />
      </Link>
      <Link href="https://www.facebook.com/abdiel.vega.9" isExternal>
        <IconButton
          aria-label="Facebook"
          icon={<FaFacebook />}
          bg="transparent"
          color="gray.400"
          sx={{
            '&:hover': {
              color: 'white',
              bg: 'transparent',
            },
          }}
        />
      </Link>
      <Link href="https://www.instagram.com/afvr94" isExternal>
        <IconButton
          aria-label="Instagram"
          icon={<FaInstagram />}
          bg="transparent"
          color="gray.400"
          sx={{
            '&:hover': {
              color: 'white',
              bg: 'transparent',
            },
          }}
        />
      </Link>
    </Flex>
  );
};

export default SocialBar;
