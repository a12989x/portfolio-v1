module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'google',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/jsx-filename-extension': [
			1,
			{ extensions: ['js', 'jsx', 'ts', 'tsx'] },
		],
	},
	settings: { react: { version: 'latest' } },
};
