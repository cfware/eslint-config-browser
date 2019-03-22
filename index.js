'use strict';

module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true,
		node: false
	},
	rules: {
		'import/no-unassigned-import': 'off',
		'symbol-description': 'off',
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true
			}
		]
	}
};
