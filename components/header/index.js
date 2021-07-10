import { Icon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/layout';

import useMediaQueries from '@/hooks/useMediaQueries';

import { LogoIcon } from '@/styles/theme/icons';
import Nav from './Nav';
import ToggleButton from './ToggleButton';
import MenuButton from './MenuButton';

const Header = ({ isMenuOpen, toggleMenu }) => {
	const { isMobileSize } = useMediaQueries();

	return (
		<Flex as='header' mb={5} justify='space-between' align='center'>
			{isMobileSize && <ToggleButton />}
			<Icon as={LogoIcon} boxSize={8} />
			{!isMobileSize ? (
				<Nav />
			) : (
				<MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
			)}
		</Flex>
	);
};

export default Header;
