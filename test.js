import test from 'ava';

import config from '.';

test('package exports non-empty object', t => {
	t.is(typeof config, 'object');
	t.not(config, null);
	t.not(Object.keys(config).length, 0);
});
