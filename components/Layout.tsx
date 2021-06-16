import { ReactNode } from 'react';

import useToggleMenu from '@/utils/hooks/useToggleMenu';
import { useMediaQuery } from '@chakra-ui/media-query';

import Header from './header';
import Footer from './footer';
import MobileNav from './header/MobileNav';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
	const { isMenuOpen, toggleMenu } = useToggleMenu();
	const [isSmallScreen] = useMediaQuery('(max-width: 479px)');

	return (
		<>
			<Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
			{isMenuOpen && isSmallScreen ? (
				<MobileNav toggleMenu={toggleMenu} />
			) : (
				children
			)}
			<Footer />
		</>
	);
};

export default Layout;
