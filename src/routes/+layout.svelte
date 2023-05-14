<script lang="ts">
	import '@fontsource/fragment-mono';
	import '../app.css';
</script>

<svelte:head>
	<title>🦉⛓ analytics</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<div class="navbar bg-base-100 mb-5">
		<a href="/" class="btn btn-ghost normal-case text-xl">🦉⛓ analytics</a>
	</div>

	<main class="flex-1 p-5">
		<slot />
	</main>

	<footer class="footer footer-center p-5 bg-base-300 text-base-content mt-5">
		<div>
			<p>© 2023 owlchain.xyz</p>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		font-family: 'Fragment Mono', monospace;
	}
</style>
