import { Flex, Heading, Text } from '@chakra-ui/layout';

import Seo from '@/components/Seo';
import ContainerWrapper from '@/components/ContainerWrapper';

/**
 * Uses: Uses page will contain information about what software and hardware I currently use day-to-day.
 * @return {JSX.Element} The JSX Code for the Uses page component
 */
const Uses = () => {
	return (
		<Flex as='main' direction='column' align='center' justify='center'>
			<Seo name='Uses 🔌' path='/uses' />

			<ContainerWrapper>
				<Heading as='h1' size='xl'>
					Uses 🔌
				</Heading>
				<Text mb='1rem'>
					This page will contain information about what software and
					hardware I currently use day-to-day.
				</Text>
			</ContainerWrapper>
		</Flex>
	);
};

export default Uses;
