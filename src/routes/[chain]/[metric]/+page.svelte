<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Chart from './_components/Chart.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	const { chain, metric } = data;
</script>

<svelte:head>
	<title>🦉⛓ | {chain.name} - {metric.name}</title>
</svelte:head>

<Breadcrumbs steps={[{ name: chain.name, href: `/${chain.name}` }, { name: metric.name }]} />

<h2 class=" mr-2.5 text-4xl font-bold">
	{metric.name}
</h2>

<div class="flex justify-center">
	<Chart data={chain[metric.slug]} currency={metric.currency} />
</div>

<div class="mt-5">source: <a class="link link-hover" href={`/`}>{metric.source}</a></div>
