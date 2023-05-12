<script lang="ts">
	export let a, b;

	import percentageDifference from '$lib/percentageDifference';

	const diff = percentageDifference(a, b);
	const colorClass = diff.startsWith('-') ? 'text-error' : 'text-success';
</script>

<span class={colorClass}>{diff}</span>
