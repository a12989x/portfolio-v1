import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';

export const decorators = [
	(Story) => (
		<ChakraProvider resetCSS theme={theme}>
			<Story />
		</ChakraProvider>
	),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
