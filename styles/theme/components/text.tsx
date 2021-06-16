import { ThemeOverride } from '@chakra-ui/react';
import { ChakraProps } from '@chakra-ui/system';

const Text: ThemeOverride = {
	size: null,
	variants: {
		default: ({ colorMode }: { colorMode: string }): ChakraProps => ({
			color: colorMode === 'light' ? 'neutral.600' : 'neutral.200',
		}),
	},
	defaultProps: { variant: 'default' },
};

export default Text;
