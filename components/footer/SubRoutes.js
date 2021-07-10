import { VStack } from '@chakra-ui/layout';

import LinkItem from './LinkItem';

const SubRoutes = () => {
	return (
		<VStack as='section' spacing={2} align='center'>
			<LinkItem href='/snippets'>Snippets</LinkItem>
			<LinkItem href='/community'>Community</LinkItem>
			<LinkItem href='/uses'>Uses</LinkItem>
		</VStack>
	);
};

export default SubRoutes;
