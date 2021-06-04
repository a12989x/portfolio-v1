import { Flex, Heading, Text } from '@chakra-ui/layout';

import ContainerWrapper from '@/components/ContainerWrapper';

/**
 * About: About page will contain information about my background, skill set and hobbies outside of tech.
 * @return {JSX.Element} The JSX Code for the About page component
 */
const About = (): JSX.Element => {
	return (
		<Flex as='main' direction='column' align='center' justify='center'>
			<ContainerWrapper>
				<Heading as='h1' size='xl'>
					About 👨‍💻
				</Heading>
				<Text mb='1rem'>
					This page will contain information about my background,
					skill set and hobbies outside of tech.
				</Text>
				<Text mb='1rem'>
					It will also contain info about how to get in touch with me.
				</Text>
			</ContainerWrapper>
		</Flex>
	);
};

export default About;
