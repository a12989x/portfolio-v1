import NextLink from 'next/link';
import { Heading, VStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Projects from '../../Projects';

const FeaturedProjects = () => {
	return (
		<VStack as='section' w='100%' spacing={16}>
			<Heading as='h2' textAlign='center'>
				Featured Projects
			</Heading>

			<Projects featured />

			<NextLink href='/projects' passHref>
				<Button as='a' variant='primary'>
					See all projects
				</Button>
			</NextLink>
		</VStack>
	);
};

export default FeaturedProjects;
