const styles = {
	global: ({ colorMode }) => ({
		body: {
			bg: colorMode === 'light' ? 'default.light' : 'default.dark',
			color: colorMode === 'light' ? 'default.dark' : 'default.light',
		},
		'#__next': {
			p: '1rem 2rem',
			mx: 'auto',
			minHeight: 'calc(100vh - 1rem)',
			maxW: '1200px',
			display: 'grid',
			gridTemplate: 'auto 1fr auto / 1fr',
		},
	}),
};

export default styles;
