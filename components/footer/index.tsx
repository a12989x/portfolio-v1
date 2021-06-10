import { Divider, HStack, Text, VStack } from '@chakra-ui/layout';

import MainRoutes from './MainRoutes';
import Socials from './Socials';
import SubRoutes from './SubRoutes';

const Footer = (): JSX.Element => {
	return (
		<VStack as='section' mt={40} spacing={10}>
			<Divider borderColor='neutral.200' />
			<HStack
				as='footer'
				w='100%'
				maxW='800px'
				align='start'
				justify='space-between'
			>
				<MainRoutes />
				<SubRoutes />
				<Socials />
			</HStack>
			<Text>Copyright © 2021 Alexis Guzman</Text>
		</VStack>
	);
};

export default Footer;
