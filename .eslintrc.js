module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'next',
		'next/core-web-vitals',
		'plugin:react/recommended',
		'google',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx'] }],
		'react/prop-types': 0,
	},
	settings: { react: { version: 'latest' } },
};
