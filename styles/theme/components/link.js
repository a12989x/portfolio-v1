const Link = {
	baseStyle: {},
	variants: {
		default: (props) => ({
			color:
				props.colorMode === 'light' ? 'primary.500' : 'secondary.300',
		}),
		subtle: (props) => ({
			color:
				props.colorMode === 'light' ? 'neutral.600' : 'default.light',
			textDecoration: 'none',
			_hover: {
				color:
					props.colorMode === 'light'
						? 'default.dark'
						: 'neutral.200',
				textDecoration: 'none',
			},
		}),
	},
	defaultProps: {
		variant: 'default',
	},
};

export default Link;
