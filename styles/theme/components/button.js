const Button = {
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'sm',
  },
  sizes: {
    sm: { fontSize: 'xs', px: '0.75rem', py: '0.5rem' },
    md: { fontSize: 'md', px: '1rem', py: '0.5rem' },
    lg: { fontSize: 'lg', px: '1.5rem', py: '0.75rem' },
  },
  variants: {
    default: ({ colorMode }) => ({
      bg: colorMode === 'light' ? 'neutral.100' : 'neutral.700',
      color: colorMode === 'light' ? 'default.dark' : 'default.light',
      _hover: {
        bg: colorMode === 'light' ? 'neutral.200' : 'neutral.600',
      },
    }),
    solid: ({ colorMode }) => ({
      bg: colorMode === 'light' ? 'default.dark' : 'default.light',
      color: colorMode === 'light' ? 'default.light' : 'default.dark',
      _hover: {
        bg: colorMode === 'light' ? 'neutral.600' : 'neutral.200',
      },
      _active: {
        bg: colorMode === 'light' ? 'default.dark' : 'default.light',
      },
      _disabled: {
        bg: 'neutral.100',
        color: 'neutral.200',
      },
    }),
    outline: ({ colorMode }) => ({
      border: '1px solid',
      borderColor: colorMode === 'light' ? 'default.dark' : 'default.light',
      color: colorMode === 'light' ? 'default.dark' : 'default.light',
      _hover: {
        bg: colorMode === 'light' ? 'default.dark' : 'default.light',
        color: colorMode === 'light' ? 'default.light' : 'default.dark',
      },
      _active: {
        bg: 'default.dark',
        color: 'default.light',
      },
      _disabled: {
        borderColor: 'neutral.200',
        color: 'neutral.200',
      },
    }),
    primary: ({ colorMode }) => ({
      bg: 'primary.500',
      color: colorMode === 'light' ? 'default.light' : 'default.dark',
      _hover: {
        bg: 'primary.600',
        _disabled: { bg: 'primary.600' },
      },
    }),
    primaryOutline: ({ colorMode }) => ({
      border: '1px solid',
      borderColor: 'primary.500',
      color: 'primary.500',
      _hover: {
        bg: 'primary.600',
        color: colorMode === 'light' ? 'default.light' : 'default.dark',
      },
    }),
  },
  defaultProps: { size: 'md', variant: 'default' },
};

export default Button;
