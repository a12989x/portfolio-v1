import { IconButton } from '@chakra-ui/button';

import MenuIcon from './MenuIcon';

const MenuButton = ({ isMenuOpen, toggleMenu }) => {
	return (
		<IconButton
			borderRadius='sm'
			onClick={toggleMenu}
			w='48px'
			h='48px'
			display={{ base: 'block', lg: 'none' }}
			variant='unstyled'
			aria-label='menu toggle button'
			_hover={{ variant: 'ghost' }}
			icon={<MenuIcon isOpen={isMenuOpen} />}
		/>
	);
};

export default MenuButton;
