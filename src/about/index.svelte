<script>
	import { sev } from '../constants.js';
	import Footer from '../layout/footer.svelte';
	import Header from '../layout/header.svelte';

	export let name;
	console.log('sev:',sev);
</script>

<Header/>
<main>
	<h1>Hello {name}!</h1>
</main>
<Footer/>

<style>
</style>