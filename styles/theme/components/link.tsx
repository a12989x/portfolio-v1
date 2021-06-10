import { ThemeOverride } from '@chakra-ui/react';
import { ChakraProps } from '@chakra-ui/system';

const Link: ThemeOverride = {
	baseStyle: {},
	variants: {
		default: ({ colorMode }: { colorMode: string }): ChakraProps => ({
			color: colorMode === 'light' ? 'primary.500' : 'secondary.300',
		}),
		subtle: ({ colorMode }: { colorMode: string }): ChakraProps => ({
			color: colorMode === 'light' ? 'neutral.600' : 'default.light',
			textDecoration: 'none',
			_hover: {
				color: colorMode === 'light' ? 'default.dark' : 'neutral.200',
				textDecoration: 'none',
			},
		}),
	},
	defaultProps: {
		variant: 'default',
	},
};

export default Link;
