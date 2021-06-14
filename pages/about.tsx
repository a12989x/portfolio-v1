import { VStack } from '@chakra-ui/layout';

import Intro from '@/components/pages/about/Intro';
import Skills from '@/components/pages/about/Skills';
import Contact from '@/components/pages/about/Contact';

/**
 * About: About page will contain information about my background, skill set and hobbies outside of tech.
 * @return {JSX.Element} The JSX Code for the About page component
 */
const About = (): JSX.Element => {
	return (
		<VStack as='section' mx='auto' w='100%' maxW='800px' spacing={28}>
			<Intro />
			<Skills />
			<Contact />
		</VStack>
	);
};

export default About;
