<script lang="ts">
	export let a, b;

	import percentageChange from '$lib/percentageChange';

	const change = percentageChange(a, b);
	const colorClass = change.startsWith('-') ? 'text-error' : 'text-success';
</script>

<span class={colorClass}>{change}</span>
