import { ReactNode } from 'react';
import NextLink from 'next/link';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/layout';

interface LinkInterface extends LinkProps {
	href: string;
	children: ReactNode;
	props?: LinkProps;
}

const Link = ({ href, children, ...props }: LinkInterface): JSX.Element => {
	return (
		<NextLink href={href} passHref>
			<ChakraLink {...props}>{children}</ChakraLink>
		</NextLink>
	);
};

export default Link;
