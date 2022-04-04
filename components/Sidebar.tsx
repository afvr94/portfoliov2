import { Box, Divider, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FiCheck } from "react-icons/fi";
import Progress from "./CodeProgress";
import LanguageProgress from "./LanguageProgress";
import SocialBar from "./SocialBar";
import SidebarHeader from "./SidebarHeader";
import SidebarPersonalInfo from "./SidebarPersonalInfo";

const Sidebar = () => {
  return (
    <Box
      width="300px"
      left="15px"
      position="absolute"
      top="15px"
      bottom="15px"
      bg="blackAlpha.600"
      overflowY="hidden"
      boxShadow="0 3px 8px 0 rgba(15, 15, 20, 0.2)"
      transition="0.55s ease-in-out"
    >
      <Box
        height="235px"
        padding="30px"
        width="100%"
        bg="linear-gradient(159deg, rgba(37, 37, 50, 0.90) 0%, rgba(35, 35, 45, 0.90) 100%)"
        boxShadow="box-shadow: 0 1px 4px 0 rgba(15, 15, 20, 0.1)"
      >
        <SidebarHeader />
      </Box>
      <Box
        overflowY="auto"
        width="100%"
        height="calc(100% - 285px)"
        padding="30px"
      >
        <SidebarPersonalInfo />
        <Divider marginY="20px" borderColor="gray.100" />
        <Box>
          <Flex align="center" justify="space-around">
            <LanguageProgress text="Spanish" value={100} />
            <LanguageProgress text="English" value={100} />
          </Flex>
        </Box>
        <Divider marginY="20px" borderColor="gray.100" />
        <Stack spacing={4}>
          <Progress text="HTML" value={90} />
          <Progress text="CSS" value={80} />
          <Progress text="Javascript" value={90} />
          <Progress text="Python" value={70} />
        </Stack>
        <Divider marginY="20px" borderColor="gray.100" />
        <Stack spacing={4}>
          <Flex align="center">
            <Icon as={FiCheck} marginRight="5px" color="yellow.400" />
            <Text color="gray.400" fontSize="sm">
              ReactJS, NextJS, Webpack
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={FiCheck} marginRight="5px" color="yellow.400" />
            <Text color="gray.400" fontSize="sm">
              Django, NodeJS
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={FiCheck} marginRight="5px" color="yellow.400" />
            <Text color="gray.400" fontSize="sm">
              TailwindCSS, styled-components
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={FiCheck} marginRight="5px" color="yellow.400" />
            <Text color="gray.400" fontSize="sm">
              MangoDB, PostgreSQL, MySQL
            </Text>
          </Flex>
        </Stack>
      </Box>
      <Box
        height="50px"
        width="100%"
        bg="linear-gradient(159deg, rgba(37, 37, 50, 0.90) 0%, rgba(35, 35, 45, 0.90) 100%)"
      >
        <SocialBar />
      </Box>
    </Box>
  );
};

export default Sidebar;
