<script lang="ts">
	import { onMount } from 'svelte';
	import EChart from '$lib/components/EChart.svelte';

	export let daa: { date: string; value: number }[];
	export let tps: { date: string; value: number }[];

	const formatData = (data: { date: string; value: number }[]) => {
		let arr: any[] = [];
		data.forEach((d) => {
			const value = Number.isInteger(d.value) ? d.value : d.value.toFixed(2);
			arr.push([d.date, value]);
		});
		return arr;
	};
	let data = { daa: formatData(daa), tps: formatData(tps) };

	let activeTab = 'tps';
	let option: any;

	onMount(async () => {
		option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: { type: 'cross' }
			},
			yAxis: {
				type: 'value',
				splitLine: {
					show: false
				},
				axisLabel: {
					formatter: '{value} TPS'
				},
				axisTick: {
					alignWithLabel: true
				}
			},
			series: [
				{
					data: data.tps,
					type: 'line',
					symbol: 'none',
					areaStyle: {
						color: '#0D0D0D',
						opacity: 0.85
					}
				}
			]
		};
	});

	const toggleChart = (btnName: 'tps' | 'daa') => {
		if (activeTab === btnName) return;

		activeTab = btnName;
		option = {
			yAxis: {
				axisLabel: {
					formatter: activeTab === 'tps' ? '{value} TPS' : '{value}'
				}
			},
			series: [
				{
					data: data[btnName]
				}
			]
		};
	};
</script>

<div class="flex flex-col space-y-2.5">
	<div class="self-end tabs tabs-boxed">
		<button
			on:click={() => toggleChart('tps')}
			class="tab {activeTab === 'tps' ? 'tab-active' : ''}">tps</button
		>
		<button
			on:click={() => toggleChart('daa')}
			class="tab {activeTab === 'daa' ? 'tab-active' : ''}">dau</button
		>
	</div>
	<EChart {option} width={1000} height={350} />
</div>
