'use strict';

module.exports = {
	parser: 'babel-eslint',
	envs: ['browser', 'es6'],
	rules: {
		'import/no-unassigned-import': 'off',
		'no-unused-expressions': ['error', {allowTaggedTemplates: true}]
	}
};
