'use strict';

module.exports = {
	parserOptions: {
		ecmaVersion: 3,
		sourceType: 'script'
	},
	env: {
		browser: true,
		es6: false,
		node: false
	},
	rules: {
		'node/no-unsupported-features/es-syntax': ['error', {version: '0'}],
		'node/no-unsupported-features/es-builtins': ['error', {version: '0'}],
		'node/no-unsupported-features/node-builtins': ['error', {version: '0'}],
		'unicorn/prefer-add-event-listener': 'off',
		'unicorn/prefer-node-append': 'off',
		'unicorn/prefer-query-selector': 'off'
	}
};
