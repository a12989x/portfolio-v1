import { Box } from '@chakra-ui/layout';

import Hero from '@/components/pages/home/Hero';
import FeaturedProjects from '@/components/pages/home/FeaturedProjects';
import Subscribe from '@/components/pages/home/Subscribe';

/**
 * Home: The landing page of web app
 * @return {JSX.Element} The JSX Code for the Home page component
 */
const Home = () => {
	return (
		<Box as='section'>
			<Hero />
			<FeaturedProjects />
			<Subscribe />
		</Box>
	);
};

export default Home;
