import { Box, Text } from '@chakra-ui/react';

import IReadTimeResults from '@/interfaces/IReadTimeResults';

interface InformationInterface {
	publishedAt?: string;
	readingTime: IReadTimeResults;
}

const Information = ({
	publishedAt,
	readingTime,
}: InformationInterface): JSX.Element => {
	return (
		<Box as='section' mb={4} mx='auto' maxW='container.sm' fontSize='sm'>
			<Text color='neutral.400'>{`${publishedAt} • ${readingTime.text}`}</Text>
		</Box>
	);
};

export default Information;
