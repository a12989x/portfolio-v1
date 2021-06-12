import { HStack } from '@chakra-ui/layout';

import MainRoutes from './MainRoutes';
import Socials from './Socials';
import SubRoutes from './SubRoutes';

const Links = (): JSX.Element => {
	return (
		<HStack
			as='section'
			w='100%'
			maxW='800px'
			align='start'
			justify='space-between'
		>
			<MainRoutes />
			<SubRoutes />
			<Socials />
		</HStack>
	);
};

export default Links;
