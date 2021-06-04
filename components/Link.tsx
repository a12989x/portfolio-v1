import { ReactNode } from 'react';
import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/layout';

interface LinkProps {
	href: string;
	isExternal?: boolean;
	children: ReactNode;
	variant?: string;
}

const Link = ({
	href,
	isExternal = true,
	children,
	variant = 'default',
}: LinkProps): JSX.Element => {
	return (
		<NextLink href={href} passHref>
			<ChakraLink isExternal={isExternal} variant={variant}>
				{children}
			</ChakraLink>
		</NextLink>
	);
};

export default Link;
