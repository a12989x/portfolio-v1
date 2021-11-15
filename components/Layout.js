import useToggleMenu from '@/hooks/useToggleMenu';

import useMediaQueries from '@/hooks/useMediaQueries';

import Header from './header';
import Footer from './footer';
import MobileNav from './header/MobileNav';

const Layout = ({ children }) => {
  const { isMenuOpen, toggleMenu } = useToggleMenu();
  const { isMobileSize } = useMediaQueries();

  return (
    <>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isMenuOpen && isMobileSize ? (
        <MobileNav toggleMenu={toggleMenu} />
      ) : (
        children
      )}
      <Footer />
    </>
  );
};

export default Layout;
