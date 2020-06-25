<script>
	import { sev } from '../constants.js';
	import Footer from '../layout/footer.svelte';
	import Header from '../layout/header.svelte';
	export let uri;
</script>

<Header/>
<main>
	<h1>Hello {uri}!</h1>
</main>
<Footer/>
<style>
</style>