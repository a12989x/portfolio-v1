import { ThemeOverride } from '@chakra-ui/react';

const styles: ThemeOverride = {
	global: ({ colorMode }: { colorMode: string }) => ({
		body: {
			bg: colorMode === 'light' ? 'default.light' : 'default.dark',
			color: colorMode === 'light' ? 'default.dark' : 'default.light',
		},
		'#__next': {
			p: { base: '0.5rem 1rem', sm: '2rem' },
			mx: 'auto',
			minHeight: '100vh',
			maxW: '1200px',
			display: 'grid',
			gridTemplate: 'auto 1fr auto / 1fr',
		},
		pre: {
			p: 4,
			mb: 4,
			fontSize: '.875rem',
			lineHeight: '1.7142857',
			bg: colorMode === 'light' ? 'neutral.100' : 'neutral.700',
			border: '1px solid',
			borderColor: colorMode === 'light' ? 'gray.200' : 'neutral.600',
			borderRadius: 'sm',
		},
		'pre::-webkit-scrollbar': { display: 'none' },
		"pre[class*='language-']": {
			color: colorMode === 'light' ? 'neutral.700' : 'neutral.100',
		},
		'.token.prolog, .token.comment, .token.doctype, .token.cdata, .token.punctuation':
			{
				color: colorMode === 'light' ? 'neutral.300' : 'neutral.400',
			},
		'.token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted':
			{ color: '#10b981' },
		'.token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted':
			{ color: '#8b5cf6' },
		'.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string':
			{
				color: '#f59e0b',
			},
		'.token.atrule, .token.attr-value, .token.keyword': {
			color: '#3b82f6',
		},
		'.token.function, .token.class-name': { color: '#ec4899' },
		'.token.regex, .token.important, .token.variable': { color: '#f59e0b' },
		'.remark-code-title': {
			py: '.75rem',
			px: '1.25rem',
			fontWeight: 'bold',
			bg: colorMode === 'light' ? 'neutral.200' : 'neutral.800',
			borderTopRadius: 'sm',
			border: '1px solid',
			borderBottom: 'none',
			borderColor: colorMode === 'light' ? 'gray.200' : 'neutral.600',
		},
		'.remark-code-title + pre': { borderTopRadius: 'none' },
		'.post-images': { borderRadius: 'sm' },
	}),
};

export default styles;
