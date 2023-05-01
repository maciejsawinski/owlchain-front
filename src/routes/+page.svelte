<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { chains } = data;

	import PercentageChange from '$lib/components/PercentageChangeWithColor.svelte';
	import formatNumber from '$lib/formatNumber';

	import MainChart from './_components/MainChart.svelte';

	const chartData = { daa: chains[0].daa, tps: chains[0].tps };
</script>

<div class="flex justify-center"><MainChart data={chartData} /></div>

<div class="overflow-x-auto mt-5 flex justify-center">
	<table class="table">
		<thead>
			<tr>
				<th>#</th>
				<th>name</th>
				<th>tps</th>
				<th>1d</th>
				<th>30d</th>
				<th>dau</th>
				<th>1d</th>
				<th>30d</th>
			</tr>
		</thead>
		<tbody>
			{#each chains as chain, i}
				<tr class="hover">
					<td>{i}</td>
					<td>{chain.name}</td>
					<td class="font-bold">{chain.tps[chain.tps.length - 1].value.toFixed(2)}</td>
					<td>
						<PercentageChange
							a={chain.tps[chain.tps.length - 1].value}
							b={chain.tps[chain.tps.length - 2].value}
						/>
					</td><td>
						<PercentageChange
							a={chain.tps[chain.tps.length - 1].value}
							b={chain.tps[chain.tps.length - 31].value}
						/>
					</td>
					<td class="font-bold">{formatNumber(chain.daa[chain.daa.length - 1].value, 'decimal')}</td
					>
					<td
						><PercentageChange
							a={chain.daa[chain.daa.length - 1].value}
							b={chain.daa[chain.daa.length - 2].value}
						/></td
					>
					<td
						><PercentageChange
							a={chain.daa[chain.daa.length - 1].value}
							b={chain.daa[chain.daa.length - 31].value}
						/></td
					>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style lang="postcss">
	th {
		text-transform: lowercase;
		text-align: end;
	}
</style>
