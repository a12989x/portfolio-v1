import { ReactNode } from 'react';
import { LinkProps } from '@chakra-ui/react';

interface LinkInterface extends LinkProps {
	href: string;
	children: ReactNode;
	props?: LinkProps;
}

export default LinkInterface;
