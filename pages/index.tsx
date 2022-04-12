import {
  Box,
  Show,
  Hide,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  IconButton,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Head from 'next/head';
import { Project } from '../types';
import Sidebar from '../components/Sidebar';
import HomeHeader from '../components/HomeHeader';
import Projects from '../components/Projects';
import About from '../components/About';
import GetInTouch from '../components/GetInTouch';

type GithubResponse = {
  id: string;
  topics: string[];
  name: string;
  html_url: string;
  homepage: string;
  description: string | null;
};

const Home: FC<{ projects: Project[] }> = ({ projects }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleToggleMobileSidebar = () => {
    setIsMobileSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <Head>
        <title>Abdiel Vega&apos;s Website</title>
      </Head>
      <Box width="100vw" bg="blackAlpha.700" height="100vh" padding="15px" overflow="hidden">
        <Hide breakpoint="(max-width: 920px)">
          <Sidebar />
        </Hide>
        <Show breakpoint="(max-width: 920px)">
          <Box height="50px">
            <IconButton
              icon={<BsThreeDotsVertical />}
              aria-label="open sidebar"
              onClick={handleToggleMobileSidebar}
              fontSize="xl"
              bg="transparent"
              color="yellow.400"
              sx={{
                '&:hover': {
                  color: 'white',
                  bg: 'transparent',
                },
              }}
            />
            <Drawer
              isOpen={isMobileSidebarOpen}
              placement="left"
              onClose={handleToggleMobileSidebar}
            >
              <DrawerOverlay />
              <DrawerContent>
                <Sidebar onHideSidebar={handleToggleMobileSidebar} />
              </DrawerContent>
            </Drawer>
          </Box>
        </Show>
        <Box
          paddingX="20px"
          height="100%"
          overflowY="auto"
          marginLeft="300px"
          sx={{
            '@media (max-width: 920px)': {
              marginLeft: '0',
            },
          }}
        >
          <HomeHeader />
          <Box marginTop="15px">
            <About />
            <Projects projects={projects} />
            <GetInTouch />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const getServerSideProps = async () => {
  const githubToken = process.env.GITHUB_TOKEN || '';

  const response = await fetch('https://api.github.com/users/afvr94/repos', {
    headers: {
      Accept: 'application/vnd.github.mercy-preview+json',
      Authorization: `token ${githubToken}`,
    },
  });

  const data: GithubResponse[] = await response.json();

  const projects = data
    .map((project) => ({
      id: project.id,
      name: project.name,
      topics: project.topics,
      url: project.html_url,
      homepage: project.homepage,
      description: project.description,
    }))
    // filtering the readme for github
    .filter((project) => project.name !== 'afvr94');

  return {
    props: {
      projects,
    },
  };
};

export default Home;
