import { Box, Text } from '@chakra-ui/layout';

import Link from '@/components/Link';
import SectionHeading from './SectionHeading';

const Contact = (): JSX.Element => {
	return (
		<Box p={{ base: '1rem', md: 0 }} w='100%' as='section'>
			<SectionHeading>Get in touch</SectionHeading>
			<Text mx='auto' maxW='container.sm'>
				I{"'"}m currently looking for part-time, full-time and freelance
				roles. If you{"'"}re interested in hiring me, would like to
				collaborate on a project, or would just like to say hi, then
				feel free to drop me an{' '}
				<Link href='mailto:codaxtech@gmail.com' isExternal>
					email
				</Link>
				. I{"'"}ll endeavour to get back to you as soon as I can!
			</Text>
		</Box>
	);
};

export default Contact;
