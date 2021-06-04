import NextLink from 'next/link';
import { Flex, Heading, Link, Text } from '@chakra-ui/layout';

import ContainerWrapper from '@/components/ContainerWrapper';

/**
 * Home: The landing page of web app
 * @return {JSX.Element} The JSX Code for the Home page component
 */
const Home = (): JSX.Element => {
	return (
		<Flex as='main' direction='column' align='center' justify='center'>
			<ContainerWrapper>
				<Heading as='h1' size='xl'>
					Site under construction 🏗
				</Heading>
				<Text mb='1rem'>
					You can see the GitHub repository{' '}
					<NextLink href='https://github.com/a12989x/' passHref>
						<Link isExternal>here</Link>
					</NextLink>
					.
				</Text>
				<Text mb='1rem'>
					Feel free to also navigate through the pages to find out
					what content will be on there!
				</Text>
			</ContainerWrapper>
		</Flex>
	);
};

export default Home;
