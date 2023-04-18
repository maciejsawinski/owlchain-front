<script>
	import '@fontsource/fragment-mono';
	import '../app.css';
</script>

<div class="navbar bg-base-100 mb-5">
	<a href="/" class="btn btn-ghost normal-case text-xl">🦉⛓ analytics</a>
</div>

<main class="p-5">
	<slot />
</main>

<footer class="footer footer-center p-4 bg-base-300 text-base-content mt-5">
	<div>
		<p>© 2023 🦉⛓</p>
	</div>
</footer>

<style>
	:global(body) {
		font-family: 'Fragment Mono', monospace;
	}
</style>
