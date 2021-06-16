import { IconButton } from '@chakra-ui/button';

import MenuIcon from './MenuIcon';
import MenuToggleHookInterface from '@/interfaces/MenuToggleHook';

const MenuButton = ({
	isMenuOpen,
	toggleMenu,
}: MenuToggleHookInterface): JSX.Element => {
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
