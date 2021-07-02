import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/layout';

import LinkInterface from '@/interfaces/Link';

const Link = ({ href, children, ...props }: LinkInterface): JSX.Element => {
	return (
		<NextLink href={href} passHref>
			<ChakraLink {...props}>{children}</ChakraLink>
		</NextLink>
	);
};

export default Link;
