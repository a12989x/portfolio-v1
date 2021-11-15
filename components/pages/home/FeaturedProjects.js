import { Heading, VStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

import Projects from '../../Projects';
import Link from '@/components/Link';

const FeaturedProjects = () => {
  return (
    <VStack as='section' w='100%' spacing={16}>
      <Heading as='h2' textAlign='center'>
        Featured Projects
      </Heading>

      <Projects featured />

      <Link href='/projects'>
        <Button variant='primary'>See all projects</Button>
      </Link>
    </VStack>
  );
};

export default FeaturedProjects;
