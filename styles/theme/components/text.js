const Text = {
	size: null,
	variants: {
		preTitle: ({ colorMode }) => ({
			textStyle: 'preTitle',
			color: colorMode === 'light' ? 'neutral.600' : 'neutral.100',
		}),
		subtitle: ({ colorMode }) => ({
			textStyle: 'subtitle',
			color: colorMode === 'light' ? 'neutral.600' : 'neutral.100',
		}),
		body: ({ colorMode }) => ({
			textStyle: 'body',
			color: colorMode === 'light' ? 'neutral.600' : 'neutral.200',
		}),
		bodyLight: ({ colorMode }) => ({
			textStyle: 'bodyLight',
			color: colorMode === 'light' ? 'neutral.700' : 'neutral.200',
		}),
		small: { textStyle: 'small' },
	},
	defaultProps: { variant: 'body' },
};

export default Text;
