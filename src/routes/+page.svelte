<script lang="ts">
	import Chart from './_components/Chart.svelte';
	import Table from './_components/Table.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	const { chains } = data;
</script>

<div class="flex justify-center"><Chart daa={chains[0].daa} tps={chains[0].tps} /></div>
<div class="overflow-x-auto mt-5 flex justify-center">
	<Table {chains} />
</div>
