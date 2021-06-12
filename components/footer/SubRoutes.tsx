import { VStack } from '@chakra-ui/layout';

import LinkItem from './LinkItem';

const SubRoutes = (): JSX.Element => {
	return (
		<VStack as='section' spacing={2} align='center'>
			<LinkItem href='/newsletter'>Newsletter</LinkItem>
			<LinkItem href='/community'>Community</LinkItem>
			<LinkItem href='/uses'>Uses</LinkItem>
		</VStack>
	);
};

export default SubRoutes;
