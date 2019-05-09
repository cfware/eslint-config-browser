function test() {}

const noDescription = Symbol();

/* Avoid no-unused-vars */
if (noDescription) {
	test();
}

const html = () => '';

console.log(html`<self-closing />`);
