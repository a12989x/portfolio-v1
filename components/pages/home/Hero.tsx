import { Button } from '@chakra-ui/button';
import { Box, Grid, Heading, Text } from '@chakra-ui/layout';

import { useColorModeValue } from '@chakra-ui/color-mode';

const Hero = (): JSX.Element => {
	const color = useColorModeValue('neutral.600', 'neutral.100');

	return (
		<Grid
			as='section'
			w='100%'
			mt={{ base: 16, sm: 24 }}
			mb={{ base: 20, sm: 48 }}
			templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
			templateRows='auto'
		>
			<Box maxW='650px'>
				<Heading as='h1' mb={2} size='2xl'>
					Hi, I’m Alexis Guzman.
				</Heading>
				<Text
					as='h2'
					mb={{ base: 16, lg: 24 }}
					maxW='600px'
					fontSize={24}
					color={color}
				>
					Welcome to my corner of the internet, where you can find my
					works, thoughts, favorite coffee and other random things.
				</Text>

				<Heading as='h3' mb={2} size='lg'>
					Ok, but who are you?
				</Heading>
				<Text mb={8} fontSize='xl'>
					I’m a curiosity-driven, design-focused developer, building
					rich, user-centric, inclusive experiences on the web.
				</Text>
				<Text mb={{ base: '1rem', lg: '2rem' }} fontSize='xl'>
					Feel free to have a look around, and learn more about myself
					and what I like to work on.
				</Text>
				<Button
					as='a'
					href='mailto:gregogun97@gmail.com'
					target='_blank'
					rel='noopener noreferrer'
					size='lg'
					variant='primaryThemed'
				>
					Get In Touch
				</Button>
			</Box>
			<Text display={{ base: 'none', md: 'inline' }}>SVG Image</Text>
		</Grid>
	);
};

export default Hero;
