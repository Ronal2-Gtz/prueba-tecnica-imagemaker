module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard-with-typescript',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['tsconfig.json'],
	},
	plugins: ['react'],
	rules: {
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/no-dynamic-delete': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'react/no-unknown-property': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
