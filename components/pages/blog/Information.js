import { Box, Text } from '@chakra-ui/react';
import { format } from 'date-fns';

const Information = ({ publishedAt, readingTime }) => {
	return (
		<Box as='section' mb={4} mx='auto' maxW='container.sm' fontSize='sm'>
			<Text color='neutral.400'>{`${format(
				publishedAt,
				'MMM DD, YYYY'
			)} • ${readingTime.text}`}</Text>
		</Box>
	);
};

export default Information;
