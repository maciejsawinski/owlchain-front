<script lang="ts">
	export let data: {
		daa: { time: string; value: number }[];
		tps: { time: string; value: number }[];
	};

	import { onMount } from 'svelte';
	import { Chart, AreaSeries } from 'svelte-lightweight-charts';

	import formatNumber from '$lib/formatNumber';

	const options = {
		chart: {
			width: 1050,
			height: 350,
			rightPriceScale: {
				borderVisible: false
			},
			localization: {
				priceFormatter: (v: number) => formatNumber(v, 'decimal')
			},
			timeScale: {
				borderVisible: false
			},
			layout: {
				fontFamily: 'Fragment Mono',
				background: {
					color: '#FFFFFF'
				},
				lineColor: '#2B2B43',
				textColor: '#191919'
			},
			grid: {
				vertLines: {
					visible: false
				},
				horzLines: {
					visible: false
				}
			},
			watermark: {
				visible: true,
				color: 'rgba(13, 13, 13, 0.33)',
				text: '🦉'
			}
		},
		series: {
			lineColor: '#0D0D0D',
			topColor: '#262626',
			bottomColor: '#FFFFFF'
		}
	};

	let series: any;
	let chartApi: any;
	let activeTab = 'tps';
	onMount(() => {
		chartApi.timeScale().fitContent();
	});

	const toggleChart = (btnName: 'tps' | 'daa') => {
		if (activeTab === btnName) return;

		chartApi.removeSeries(series);
		series = chartApi.addAreaSeries();
		series.applyOptions(options.series);
		series.setData(data[btnName]);
		chartApi.timeScale().fitContent();

		activeTab = btnName;
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

	<Chart {...options.chart} ref={(api) => (chartApi = api)}>
		<AreaSeries data={data.tps} {...options.series} ref={(api) => (series = api)} />
	</Chart>
</div>
