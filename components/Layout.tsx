import { ReactNode } from 'react';

import Head from './Head';
import Header from './header';
import Footer from './footer';

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
