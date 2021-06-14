import { Box, Heading, HStack } from '@chakra-ui/layout';
import { ReactNode } from 'react';

import useColorModeValues from '@/utils/hooks/useColorModeValues';

const SectionHeading = ({ children }: { children: ReactNode }): JSX.Element => {
	const { greyColor } = useColorModeValues();

	return (
		<HStack w='100%' mb={8}>
			<Box flex='1' h='1px' bg={greyColor} />
			<Heading as='h3' px={4} textAlign='center'>
				{children}
			</Heading>
			<Box flex='1' h='1px' bg={greyColor} />
		</HStack>
	);
};

export default SectionHeading;
