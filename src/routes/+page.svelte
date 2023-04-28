<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import PercentageChange from '$lib/components/PercentageChange.svelte';

	import formatNumber from '$lib/formatNumber';
</script>

<div class="overflow-x-auto flex justify-center">
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
			{#each data.chains as chain, i}
				<tr class="hover">
					<td>{i}</td>
					<td>{chain.name}</td>
					<td class="font-bold">{chain.tps[0].value.toFixed(2)}</td>
					<td>
						<PercentageChange a={chain.tps[0].value} b={chain.tps[1].value} />
					</td><td>
						<PercentageChange a={chain.tps[0].value} b={chain.tps[29].value} />
					</td>
					<td class="font-bold">{formatNumber(chain.daa[0].value, 'decimal')}</td>
					<td><PercentageChange a={chain.daa[0].value} b={chain.daa[1].value} /></td>
					<td><PercentageChange a={chain.daa[0].value} b={chain.daa[29].value} /></td>
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
