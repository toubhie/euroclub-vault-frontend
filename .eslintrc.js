module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
		'prettier',
		'unused-imports',
		'import'
	],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	root: true,
	env: {
		node: true,
		jest: true
	},
	settings: {
		'import/resolver': {
			typescript: true,
			node: true
		}
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'array-bracket-spacing': 'error',
		'arrow-parens': ['error', 'always'],
		'arrow-spacing': 'error',
		'camelcase': 'error',
		'comma-dangle': ['error', 'never'],
		'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
		'no-debugger': 'error',
		'no-duplicate-case': 'error',
		'object-curly-spacing': ['error', 'always'],
		'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
		'prefer-const': 'error',
		'semi': ['error', 'always'],
		'import/order': ['error', {
			'groups': ['builtin', 'external', 'internal'],
			'newlines-between': 'always'
		}],
		'comma-spacing': ['error', { before: false, after: true }],
		'prettier/prettier': ['error',
			{
				'printWidth': 120,
				'tabWidth': 2,
				'useTabs': true,
				'semi': true,
				'singleQuote': true,
				'trailingComma': 'none',
				'bracketSpacing': true,
				'arrowParens': 'always',
				'endOfLine': 'auto'
			}
		],
		'quotes': ['error', 'single', {
			avoidEscape: false,
			allowTemplateLiterals: true
		}],
		'unused-imports/no-unused-imports': 'error',
	}
};
