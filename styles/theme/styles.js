const styles = {
	global: ({ colorMode }) => ({
		body: {
			bg: colorMode === 'light' ? 'default.light' : 'default.dark',
			color: colorMode === 'light' ? 'default.dark' : 'default.light',
		},
		'#__next': { minHeight: '100vh' },
	}),
};

export default styles;
