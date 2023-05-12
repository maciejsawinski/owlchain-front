<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as echarts from 'echarts';

	export let width: number;
	export let height: number;
	export let option: {};
	export let notMerge = false;
	export let replaceMerge: string | undefined = undefined;
	export let lazyUpdate = false;

	let chart: any;

	const setOption = () => {
		if (chart && !chart.isDisposed()) {
			chart.setOption(option, notMerge, replaceMerge, lazyUpdate);
		}
	};

	const destroyChart = () => {
		if (chart && !chart.isDisposed()) {
			chart.dispose();
		}
	};

	const makeChart = () => {
		destroyChart();
		chart = echarts.init(document.getElementById('echart')!);
	};

	onMount(() => {
		makeChart();
	});

	onDestroy(() => {
		destroyChart();
	});

	let timeoutId: any;
	const handleResize = () => {
		if (timeoutId == undefined) {
			timeoutId = setTimeout(() => {
				if (chart && !chart.isDisposed()) {
					chart.resize();
				}
				timeoutId = undefined;
			}, 500);
		}
	};

	$: width && handleResize();
	$: option && setOption();
</script>

<div>
	<div id="echart" style="width:{width}px;height:{height}px" />
</div>
