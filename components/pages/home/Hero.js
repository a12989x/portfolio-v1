import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { Center, Grid, Heading, Text } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import Icon from '@chakra-ui/icon';

import { useColorModeValue } from '@chakra-ui/color-mode';
import useMediaQueries from '@/hooks/useMediaQueries';

import { HeroIcon } from '@/styles/theme/icons';
import Link from '@/components/Link';

const MainBox = motion(Box);

const Hero = () => {
	const textColor = useColorModeValue('neutral.600', 'neutral.100');
	const { isExtraLargeSize } = useMediaQueries();

	return (
		<Center
			minH='calc(100vh - 1rem - 4.8rem)'
			mt={{ base: 8, sm: 0 }}
			mb={{ base: 20 }}
		>
			<Grid
				as='section'
				w='100%'
				templateColumns={{ base: '1fr', lg: 'auto 1fr' }}
				templateRows='auto'
				gap={8}
			>
				<MainBox
					as='main'
					maxW='650px'
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
				>
					<Heading as='h1' mb={2} size='2xl'>
						Hi, I’m Alexis Guzman.
					</Heading>
					<Text
						as='h2'
						mb={{ base: 16, lg: 24 }}
						maxW='600px'
						fontSize={24}
						color={textColor}
					>
						Welcome to my corner of the internet, where you can find
						my works, thoughts, favorite coffee and other random
						things.
					</Text>

					<Heading as='h3' mb={2} size='lg'>
						Ok, but who are you?
					</Heading>
					<Text mb={8} fontSize='xl'>
						I’m a curiosity-driven, design-focused developer,
						building rich, user-centric, inclusive experiences on
						the web.
					</Text>
					<Text mb={{ base: '1rem', lg: '2rem' }} fontSize='xl'>
						Feel free to have a look around, and learn more about
						myself and what I like to work on.
					</Text>
					<Link href='/about#contact'>
						<Button size='lg' variant='primary'>
							Get In Touch
						</Button>
					</Link>
				</MainBox>
				{isExtraLargeSize && (
					<motion.div
						initial={{ y: -50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
					>
						<Icon as={HeroIcon} boxSize='100%' />
					</motion.div>
				)}
			</Grid>
		</Center>
	);
};

export default Hero;
