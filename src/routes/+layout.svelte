<script lang="ts">
	import { navigating } from '$app/stores';

	import { loading } from '$lib/components/loading';
	import Loading from '$lib/components/Loading.svelte';

	$: loading.setNavigate(!!$navigating);

	import '@fontsource/fragment-mono';
	import '../app.css';
</script>

<svelte:head>
	<title>owlchain analytics</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="dropdown">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="-1" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/></svg
					>
				</label>
				<ul
					tabindex="-1"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li><a href="/ethereum">ethereum</a></li>
				</ul>
			</div>
			<a href="/" class="btn btn-ghost normal-case text-xl">🦉⛓ analytics</a>
			<ul class="hidden lg:flex menu menu-horizontal px-1">
				<li><a href="/ethereum">ethereum</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			<a href="/docs" class="btn lowercase">docs</a>
		</div>
	</div>

	<main class="flex-1 px-5">
		{#if $loading.status === 'NAVIGATING'}
			<Loading />
		{:else}
			<slot />
		{/if}
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
