import { ReactNode } from 'react';
import { VStack } from '@chakra-ui/layout';

import NavLink from './NavLink';

interface NavItemProps {
	href: string;
	children: ReactNode;
}

const NavItem = ({ href, children }: NavItemProps): JSX.Element => {
	return (
		<VStack
			as='li'
			spacing={4}
			w='100%'
			h='100%'
			align='start'
			listStyleType='none'
		>
			<NavLink href={href}>{children}</NavLink>
		</VStack>
	);
};

export default NavItem;
