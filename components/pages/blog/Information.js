import { Box, Text } from '@chakra-ui/react';

const Information = ({ publishedAt, readingTime }) => {
	return (
		<Box as='section' mb={4} mx='auto' maxW='container.sm' fontSize='sm'>
			<Text color='neutral.400'>{`${publishedAt} • ${readingTime.text}`}</Text>
		</Box>
	);
};

export default Information;
