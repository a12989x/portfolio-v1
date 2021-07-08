import { VStack } from '@chakra-ui/layout';

import Seo from '@/components/Seo';
import Intro from '@/components/pages/about/Intro';
import Skills from '@/components/pages/about/Skills';
import Contact from '@/components/pages/about/Contact';

/**
 * About: About page will contain information about my background, skill set and hobbies outside of tech.
 * @return {JSX.Element} The JSX Code for the About page component
 */
const About = () => {
	return (
		<VStack as='section' mx='auto' w='100%' maxW='800px' spacing={28}>
			<Seo name='About 👨‍💻' path='/about' />

			<Intro />
			<Skills />
			<Contact />
		</VStack>
	);
};

export default About;
