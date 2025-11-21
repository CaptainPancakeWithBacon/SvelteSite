<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
	<title>Gijs Borghouts | Software Engineering Student</title>
	<meta
		name="description"
		content="Portfolio of Gijs Borghouts - Software Engineering student exploring all areas of tech"
	/>
</svelte:head>

<Nav />

<main>
	{@render children?.()}
</main>
