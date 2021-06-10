import { VStack } from '@chakra-ui/layout';

import Link from '../Link';

const SubRoutes = (): JSX.Element => {
	return (
		<VStack as='section' spacing={2} align='center'>
			<Link href='/newsletter' variant='subtle' isExternal={false}>
				Newsletter
			</Link>
			<Link href='/community' variant='subtle' isExternal={false}>
				Community
			</Link>
			<Link href='/uses' variant='subtle' isExternal={false}>
				Uses
			</Link>
		</VStack>
	);
};

export default SubRoutes;
