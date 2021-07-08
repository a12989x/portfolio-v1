import { Divider, Text, VStack } from '@chakra-ui/layout';

import { useMediaQuery } from '@chakra-ui/media-query';

import Links from './Links';
import MobileLinks from './MobileLinks';

const Footer = () => {
	const [isMobile] = useMediaQuery('(max-width: 479px)');

	return (
		<VStack as='footer' mt={{ base: 20, sm: 40 }} spacing={10}>
			<Divider borderColor='neutral.200' />
			{isMobile ? <MobileLinks /> : <Links />}
			<Text>Copyright © 2021 Alexis Guzman</Text>
		</VStack>
	);
};

export default Footer;
