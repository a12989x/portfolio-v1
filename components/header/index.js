import { Icon } from '@chakra-ui/icons';
import { chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import useMediaQueries from '@/hooks/useMediaQueries';

import { LogoIcon } from '@/styles/theme/icons';
import Nav from './Nav';
import ToggleButton from './ToggleButton';
import MenuButton from './MenuButton';

const HeaderBox = motion(chakra.header);

const Header = ({ isMenuOpen, toggleMenu }) => {
	const { isMobileSize } = useMediaQueries();

	return (
		<HeaderBox
			as='header'
			mb={5}
			display='flex'
			alignItems='center'
			justifyContent='space-between'
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ delay: 0.1 }}
		>
			{isMobileSize && <ToggleButton />}
			<Icon as={LogoIcon} boxSize={8} />
			{!isMobileSize ? (
				<Nav />
			) : (
				<MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
			)}
		</HeaderBox>
	);
};

export default Header;
