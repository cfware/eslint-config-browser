'use strict';

module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true,
		node: false
	},
	plugins: [
		'lit'
	],
	extends: [
		'plugin:lit/recommended'
	],
	rules: {
		'import/no-unassigned-import': 'off',
		'symbol-description': 'off',
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true
			}
		],
		'lit/no-invalid-html': 'off',
		'lit/no-useless-template-literals': 'error',
		'lit/no-value-attribute': 'error'
	}
};
