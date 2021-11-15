import { Grid } from '@chakra-ui/layout';

import projects from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

const Projects = ({ featured = false }) => {
  const projectsArray = featured
    ? projects.filter(({ feature }) => feature)
    : projects;

  return (
    <Grid
      as='ul'
      mx='auto'
      w={{ base: '100%', md: '90%' }}
      justifyItems='center'
      templateColumns={{
        base: '1fr',
        sm: 'repeat(auto-fill, minmax(450px, 1fr))',
      }}
      gap={8}
    >
      {projectsArray.map((projectItem) => (
        <ProjectCard key={projectItem.id} {...projectItem} />
      ))}
    </Grid>
  );
};

export default Projects;
