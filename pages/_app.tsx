import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import theme from '@/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
