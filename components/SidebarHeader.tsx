import { Flex, Image, Text, Show, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

type Props = {
  onHideSidebar?: () => void;
};

const SidebarHeader: FC<Props> = ({ onHideSidebar }) => {
  return (
    <Flex align="center" justify="center" direction="column">
      <Show breakpoint="(max-width: 920px)">
        <IconButton
          icon={<AiOutlineClose />}
          onClick={onHideSidebar}
          aria-label="close sidebar"
          position="absolute"
          bg="transparent"
          color="yellow.400"
          top="0px"
          right="0px"
          fontSize="xl"
          sx={{
            '&:hover': {
              color: 'white',
              bg: 'transparent',
            },
          }}
        />
      </Show>
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

SidebarHeader.defaultProps = {
  onHideSidebar: undefined,
};

export default SidebarHeader;
