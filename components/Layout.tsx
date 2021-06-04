import { ReactNode } from 'react';

import Head from './Head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
	return (
		<>
			<Head />
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
