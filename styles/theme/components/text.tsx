import { ThemeOverride } from '@chakra-ui/react';
import { ChakraProps } from '@chakra-ui/system';

const Text: ThemeOverride = {
	size: null,
	variants: {
		default: ({ colorMode }: { colorMode: string }): ChakraProps => ({
			color: colorMode === 'light' ? 'neutral.600' : 'neutral.100',
		}),
		preTitle: ({ colorMode }: { colorMode: string }): ChakraProps => ({
			textStyle: 'preTitle',
			color: colorMode === 'light' ? 'neutral.600' : 'neutral.100',
		}),
		subtitle: ({ colorMode }: { colorMode: string }): ChakraProps => ({
			textStyle: 'subtitle',
			color: colorMode === 'light' ? 'neutral.600' : 'neutral.100',
		}),
		body: ({ colorMode }: { colorMode: string }): ChakraProps => ({
			textStyle: 'body',
			color: colorMode === 'light' ? 'neutral.600' : 'neutral.200',
		}),
		bodyLight: ({ colorMode }: { colorMode: string }): ChakraProps => ({
			textStyle: 'bodyLight',
			color: colorMode === 'light' ? 'neutral.700' : 'neutral.200',
		}),
		small: { textStyle: 'small' },
	},
	defaultProps: { variant: 'body' },
};

export default Text;
