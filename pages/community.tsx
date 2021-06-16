import { Flex, Heading, Text } from '@chakra-ui/layout';

import Seo from '@/components/Seo';
import ContainerWrapper from '@/components/ContainerWrapper';

/**
 * Community: Community page will contain information about inspirations behind the design/code solutions of this site, as well as contributors.
 * @return {JSX.Element} The JSX Code for the Community page component
 */
const Community = (): JSX.Element => {
	return (
		<Flex as='main' direction='column' align='center' justify='center'>
			<Seo name='Community 🌍' path='/community' />

			<ContainerWrapper>
				<Heading as='h1' size='xl'>
					Community 🌍
				</Heading>
				<Text mb='1rem'>
					This page will contain information about inspirations behind
					the design/code solutions of this site, as well as
					contributors.
				</Text>
			</ContainerWrapper>
		</Flex>
	);
};

export default Community;
