import { Flex, Heading, Text } from '@chakra-ui/layout';

import ContainerWrapper from '@/components/ContainerWrapper';
import Link from '@/components/Link';

/**
 * Blog: Blog page will contain a list of Blog I've written.
 * @return {JSX.Element} The JSX Code for the Blog page component
 */
const Blog = (): JSX.Element => {
	return (
		<Flex as='main' direction='column' align='center' justify='center'>
			<ContainerWrapper>
				<Heading as='h1' size='xl'>
					Blog 🎲
				</Heading>
				<Text mb='1rem'>
					This page will contain a list of posts I&apos;ve written on{' '}
					<Link href='https://codax.hashnode.com'>Hashnode</Link> and{' '}
					<Link href='https://dev.to/_codax_'>Dev.to</Link>
				</Text>
				<Text mb='1rem'>
					It will be home to all of my thoughts and ideas around web
					development and design.
				</Text>
			</ContainerWrapper>
		</Flex>
	);
};

export default Blog;
