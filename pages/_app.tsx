import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import theme from '@/styles/theme';
import Layout from '@/components/Layout';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
};

export default MyApp;
