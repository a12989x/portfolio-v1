import { useState } from 'react';

import MenuToggleHookInterface from '@/interfaces/MenuToggleHook';

const useToggleMenu = (): MenuToggleHookInterface => {
	const [isMenuOpen, setMenuIsOpen] = useState(false);
	const toggleMenu = () => setMenuIsOpen((v) => !v);

	return { isMenuOpen, toggleMenu };
};

export default useToggleMenu;
