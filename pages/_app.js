import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import theme from '@/styles/theme';
import Layout from '@/components/Layout';
import Head from '@/components/Head';

const MyApp = ({ Component, pageProps }) => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Layout>
				<Head />
				<DefaultSeo {...SEO} />
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
};

export default MyApp;
