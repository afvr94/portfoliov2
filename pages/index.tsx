import { Box, Text, Grid, Divider, Flex, Button, Icon } from '@chakra-ui/react';
import { FC } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import HomeHeader from '../components/HomeHeader';

type GithubResponse = {
  id: string;
  topics: string[];
  name: string;
  html_url: string;
  homepage: string;
  description: string | null;
};

export type Project = {
  id: number;
  topics: string[];
  name: string;
  url: string;
  homepage: string;
  description: string | null;
};

const Home: FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Abdiel Vega&apos;s Website</title>
      </Head>
      <Box width="100vw" bg="blackAlpha.700" height="100vh" padding="15px" overflow="hidden">
        <Sidebar />
        <Box marginLeft="300px" paddingX="20px" height="100%" overflowY="auto">
          <HomeHeader />
          <Box marginTop="15px">
            <Text fontWeight="bold" fontSize="2xl" color="white">
              About
            </Text>
            <Box
              marginTop="15px"
              height="auto"
              padding="40px"
              bg="linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)"
              color="white"
            >
              <Text fontSize="4xl" fontWeight="bold" color="yellow.400">
                Hi! My name is Abdiel,
              </Text>
              <Box marginTop="10px">
                <Text fontSize="lg" fontWeight="normal">
                  I&apos;m a full-stack engineer, and I graduated from the University of Puerto Rico
                  in Mayagüez with a degree in Computer Engineering. I love to create projects that
                  make an impact on society. I&apos;m interested in the whole frontend stack like
                  React + Redux, etc. To build unique projects and bring designs to life. Also,
                  I&apos;m interested in the Python + NodeJS stacks for the backend. I&apos;m a
                  fitness freak, and I like to weightlift and do cycling. I love to explore and
                  learn new topics in engineering.
                </Text>
              </Box>
            </Box>
            <Box marginY="20px">
              <Text fontWeight="bold" fontSize="2xl" color="white">
                My projects
              </Text>
            </Box>
            <Grid templateColumns="repeat( auto-fit, minmax(300px, 1fr) )" gap={6}>
              {projects.map((project) => (
                <Flex
                  key={project.id}
                  direction="column"
                  padding="20px"
                  boxShadow="0 3px 8px 0 rgba(15, 15, 20, 0.2)"
                  bg="linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%)"
                  height="350px"
                >
                  <Text fontSize="md" color="white" fontWeight="bold">
                    {project.name}
                  </Text>
                  <Box marginTop="12px">
                    <Text color="gray.400">Description</Text>
                    <Box marginTop="10px">
                      <Text fontSize="sm" color="white">
                        {project.description}
                      </Text>
                    </Box>
                  </Box>
                  <Box marginTop="auto">
                    <Divider borderColor="gray.400" marginY="10px" />
                    <Flex flexWrap="wrap">
                      {project.topics.map((topic) => (
                        <Box marginRight="4px" key={topic}>
                          <Text color="white" fontSize="small">
                            #{topic}
                          </Text>
                        </Box>
                      ))}
                    </Flex>
                    <Button variant="link" fontSize="sm" color="yellow.400" marginTop="8px">
                      Visit <Icon as={FaChevronRight} marginLeft="4px" />
                    </Button>
                  </Box>
                </Flex>
              ))}
            </Grid>
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
