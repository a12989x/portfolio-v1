import { Flex, Heading, Text } from '@chakra-ui/layout';

import ContainerWrapper from '@/components/ContainerWrapper';

/**
 * Projects: Projects page will contain a list of projects I've made or have worked on.
 * @return {JSX.Element} The JSX Code for the Projects page component
 */
const Projects = (): JSX.Element => {
	return (
		<Flex as='main' direction='column' align='center' justify='center'>
			<ContainerWrapper>
				<Heading as='h1' size='xl'>
					Projects 🎲
				</Heading>
				<Text mb='1rem'>
					This page will contain a list of projects I&apos;ve made or
					have worked on.
				</Text>
				<Text mb='1rem'>
					Each project will contain a summary, live link (if
					applicable) and a link to the project repository.
				</Text>
			</ContainerWrapper>
		</Flex>
	);
};

export default Projects;
