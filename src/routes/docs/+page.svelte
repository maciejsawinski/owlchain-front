<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { marked } from 'marked';

	import docsmd from '$lib/data/docs.md?raw';
</script>

<svelte:head>
	<title>owlchain | docs</title>
</svelte:head>

<Breadcrumbs steps={[{ name: 'docs' }]} />

<h2 class="text-4xl font-bold">documentation 📜</h2>

<div class="flex justify-center">
	<article class="min-w-full mt-5 px-10 prose prose-code:bg-base-300">
		{@html marked(docsmd, { mangle: false, headerIds: false })}
	</article>
</div>
