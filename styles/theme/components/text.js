const Text = {
  size: null,
  variants: {
    default: ({ colorMode }) => ({
      color: colorMode === 'light' ? 'neutral.600' : 'neutral.200',
    }),
  },
  defaultProps: { variant: 'default' },
};

export default Text;
