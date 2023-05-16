<script lang="ts">
	import formatNumber from '$lib/formatNumber';

	import PercentageDifference from '$lib/components/PercentageDifferenceWithColor.svelte';

	export let chain: string;
	export let metric: string;
	export let name: string;
	export let type: 'decimal' | 'currency' = 'decimal';
	export let valueCurrent: number;
	export let valueOld: number;
</script>

<a href={`/${chain}/${metric}`} class="hover:bg-base-300">
	<div class="sm:w-96 card shadow">
		<div class="card-body">
			<div class="stat place-items-center">
				<div class="stat-title">{name}</div>
				<div class="stat-value text-secondary">
					{formatNumber(valueCurrent, type)}
				</div>
				<div class="tooltip" data-tip="30 days difference">
					<div class="stat-desc text-secondary">
						<PercentageDifference a={valueCurrent} b={valueOld} />
					</div>
				</div>
				<div class="hidden sm:block stat-figure text-secondary text-5xl font-bold">
					{valueCurrent > valueOld ? '📈' : '📉'}
				</div>
			</div>
		</div>
	</div>
</a>
