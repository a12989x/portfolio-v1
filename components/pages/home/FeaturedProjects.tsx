import NextLink from 'next/link';
import { Heading, VStack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Projects from './Projects';

const FeaturedProjects = (): JSX.Element => {
	return (
		<VStack as='section' w='100%' spacing={16}>
			<Heading as='h2' textAlign='center'>
				Featured Projects
			</Heading>

			<Projects />

			<NextLink href='/projects' passHref>
				<Button
					as='a'
					display='block'
					fontSize={{ base: 'lg', lg: 'xl' }}
					textAlign='center'
					textTransform='capitalize'
					variant='secondaryThemed'
				>
					See all projects
				</Button>
			</NextLink>
		</VStack>
	);
};

export default FeaturedProjects;
