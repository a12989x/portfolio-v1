import { Divider, Text, VStack } from '@chakra-ui/layout';

import useMediaQueries from '@/hooks/useMediaQueries';

import Links from './Links';
import MobileLinks from './MobileLinks';

const Footer = () => {
	const { isMobileSize } = useMediaQueries();

	return (
		<VStack as='footer' mt={{ base: 20, sm: 40 }} spacing={10}>
			<Divider />
			{isMobileSize ? <MobileLinks /> : <Links />}
			<Text>Copyright © 2021 Alexis Guzman</Text>
		</VStack>
	);
};

export default Footer;
