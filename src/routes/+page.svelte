<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { chains } = data;

	import Chart from './_components/Chart.svelte';
	import Table from './_components/Table.svelte';

	const chartData = { daa: chains[0].daa, tps: chains[0].tps };
</script>

<div class="flex justify-center"><Chart data={chartData} /></div>
<div class="overflow-x-auto mt-5 flex justify-center">
	<Table {chains} />
</div>
