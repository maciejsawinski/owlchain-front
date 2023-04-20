<script lang="ts">
	import type { PageData } from './$types';

	import formatNumber from '$lib/formatNumber';

	export let data: PageData;
</script>

<div class="overflow-x-auto flex justify-center">
	<table class="table">
		<thead>
			<tr>
				<th>#</th>
				<th>name</th>
				<th>tps</th>
				<th>active addresses</th>
				<th>tvl</th>
			</tr>
		</thead>
		<tbody>
			{#each data.chains as chain, i}
				<tr class="hover">
					<td>{i}</td>
					<td>{chain.name}</td>
					<td class="text-end">{formatNumber(chain.tps[0].value, 'decimal')}</td>
					<td class="text-end">{formatNumber(chain.daa[0].value, 'decimal')}</td>
					<td class="text-end">{formatNumber(chain.tvl[0].value, 'currency')}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
