import Index from './index.svelte';

const app = new Index({
	target: document.body,
	props: {
		name: 'Jepan'
	}
});

export default app;