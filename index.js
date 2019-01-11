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
		'no-unused-expressions': ['error', {allowTaggedTemplates: true}]
	}
};
