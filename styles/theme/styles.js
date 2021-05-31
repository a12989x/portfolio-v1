const styles = {
	global: (props) => ({
		body: {
			color: props.colorMode === 'light' ? 'dark' : 'light',
			bg: props.colorMode === 'light' ? 'dark' : 'light',
		},
	}),
};

export default styles;
