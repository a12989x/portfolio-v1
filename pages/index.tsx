import NextLink from 'next/link';
import { Flex, Heading, Link, Text } from '@chakra-ui/layout';

/**
 * Home: The landing page of web app
 * @return {JSX.Element} The JSX Code for the Home page component
 */
const Home = (): JSX.Element => {
	return (
		<Flex
			as='main'
			minH='100vh'
			direction='column'
			align='center'
			justify='center'
		>
			<Heading as='h1' size='xl'>
				This site is currently under construction
			</Heading>
			<Text mb='1rem' variant='preTitle'>
				Portfolio build with Next.js, chakra-ui, storybook and other
				technologies.
			</Text>
			<NextLink href='https://github.com/a12989x/' passHref>
				<Link isExternal>Go to my GitHub</Link>
			</NextLink>
		</Flex>
	);
};

export default Home;
