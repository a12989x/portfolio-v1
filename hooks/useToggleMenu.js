import { useState } from 'react';

const useToggleMenu = () => {
	const [isMenuOpen, setMenuIsOpen] = useState(false);
	const toggleMenu = () => setMenuIsOpen((v) => !v);

	return { isMenuOpen, toggleMenu };
};

export default useToggleMenu;
