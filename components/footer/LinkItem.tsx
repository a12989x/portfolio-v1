import { VStack } from '@chakra-ui/layout';
import { ReactNode } from 'react';

import Link from '../Link';

interface LinkInterface {
	href: string;
	children: ReactNode;
}

const LinkItem = ({ href, children }: LinkInterface): JSX.Element => {
	return (
		<VStack as='li'>
			<Link href={href} variant='subtle'>
				{children}
			</Link>
		</VStack>
	);
};

export default LinkItem;
