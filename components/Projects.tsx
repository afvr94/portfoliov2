import { Box, Flex, Text, Grid, Divider, Button, Icon } from '@chakra-ui/react';
import { FC } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Project } from '../types';

type Props = {
  projects: Project[];
};

const Projects: FC<Props> = ({ projects }) => {
  return (
    <>
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
    </>
  );
};

export default Projects;
