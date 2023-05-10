<script lang="ts">
	import { onMount } from 'svelte';
	import * as echarts from 'echarts';
	import EChart from '$lib/components/EChart.svelte';

	import formatNumber from '$lib/formatNumber';

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
			color: '#0D0D0D',
			tooltip: {
				trigger: 'axis',
				axisPointer: { type: 'cross' }
			},
			textStyle: {
				fontFamily: 'Fragment Mono',
				color: '#0D0D0D'
			},
			graphic: {
				elements: [
					{
						type: 'text',
						top: 'center',
						left: 'center',
						style: {
							text: '🦉',
							font: '4rem "Fragment Mono"',
							opacity: 0.33
						}
					}
				]
			},
			useUTC: true,
			xAxis: {
				type: 'time',
				axisTick: {
					alignWithLabel: true
				}
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
