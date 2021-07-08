import { Icon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/layout';

import { useMediaQuery } from '@chakra-ui/media-query';

import { LogoIcon } from '@/styles/theme/icons';
import Nav from './Nav';
import ToggleButton from './ToggleButton';
import MenuButton from './MenuButton';

const Header = ({ isMenuOpen, toggleMenu }) => {
	const [isSmallScreen] = useMediaQuery('(max-width: 479px)');

	return (
		<Flex as='header' mb={5} justify='space-between' align='center'>
			{isSmallScreen && <ToggleButton />}
			<Icon as={LogoIcon} boxSize={8} />
			{!isSmallScreen ? (
				<Nav />
			) : (
				<MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
			)}
		</Flex>
	);
};

export default Header;
