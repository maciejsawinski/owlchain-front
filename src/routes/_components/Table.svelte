<script lang="ts">
	import formatNumber from '$lib/formatNumber';

	import PercentageChange from '$lib/components/PercentageChangeWithColor.svelte';

	export let chains: {
		name: string;
		tps: {
			value: number;
		}[];
		daa: {
			value: number;
		}[];
	}[];
</script>

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
				<td><a class="link link-hover" href={`/${chain.name}`}>{i}</a></td>
				<td><a class="link link-hover" href={`/${chain.name}`}>{chain.name}</a></td>
				<td class="font-bold"
					><a class="link link-hover" href={`/${chain.name}/tps`}>{chain.tps[0].value.toFixed(2)}</a
					></td
				>
				<td>
					<PercentageChange a={chain.tps[0].value} b={chain.tps[1].value} />
				</td><td>
					<PercentageChange a={chain.tps[0].value} b={chain.tps[29].value} />
				</td>
				<td class="font-bold"
					><a class="link link-hover" href={`/${chain.name}/daa`}
						>{formatNumber(chain.daa[0].value, 'decimal')}</a
					></td
				>
				<td><PercentageChange a={chain.daa[0].value} b={chain.daa[1].value} /></td>
				<td><PercentageChange a={chain.daa[0].value} b={chain.daa[29].value} /></td>
			</tr>
		{/each}
	</tbody>
</table>

<style lang="postcss">
	th {
		text-transform: lowercase;
		text-align: end;
	}
</style>
