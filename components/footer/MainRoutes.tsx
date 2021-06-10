import { VStack } from '@chakra-ui/layout';

import Link from '../Link';

const MainRoutes = (): JSX.Element => {
	return (
		<VStack as='section' spacing={2} align='start'>
			<Link href='/' variant='subtle' isExternal={false}>
				Home
			</Link>
			<Link href='/about' variant='subtle' isExternal={false}>
				About
			</Link>
			<Link href='/projects' variant='subtle' isExternal={false}>
				Projects
			</Link>
			<Link href='/blog' variant='subtle' isExternal={false}>
				Blog
			</Link>
		</VStack>
	);
};

export default MainRoutes;
