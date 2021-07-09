import { Box, SimpleGrid } from '@chakra-ui/layout';

import SectionHeading from './SectionHeading';
import ContactText from './ContactText';
import ContactForm from './ContactForm';

const Contact = () => {
	return (
		<Box p={{ base: '1rem', md: 0 }} w='100%' as='section' id='contact'>
			<SectionHeading>Get in touch</SectionHeading>
			<SimpleGrid
				mx='auto'
				maxW='container.sm'
				columns={{ base: 1, md: 2 }}
				spacing={10}
			>
				<ContactText />

				<ContactForm />
			</SimpleGrid>
		</Box>
	);
};

export default Contact;
