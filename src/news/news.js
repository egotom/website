
import Index from './index.svelte';

const app = new Index({
	target: document.body,
	props: {
		uri: document.URL
	}
});

export default app;