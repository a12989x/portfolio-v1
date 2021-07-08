import { VStack } from '@chakra-ui/layout';

import LinkItem from './LinkItem';

const MainRoutes = () => {
	return (
		<VStack as='ul' spacing={2} align='start'>
			<LinkItem href='/'>Home</LinkItem>
			<LinkItem href='/about'>About</LinkItem>
			<LinkItem href='/projects'>Projects</LinkItem>
			<LinkItem href='/blog'>Blog</LinkItem>
		</VStack>
	);
};

export default MainRoutes;
