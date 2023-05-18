<script lang="ts">
	import { onMount } from 'svelte';
	import EChart from '$lib/components/EChart.svelte';

	import formatNumber from '$lib/formatNumber';

	export let data: { date: Date; value: number | bigint }[];
	export let currency: boolean;

	const formatData = (data: { date: Date; value: number | bigint }[]) => {
		const dataRev = data.reverse();
		let arr: any[] = [];
		dataRev.forEach((d) => {
			let formattedValue: number | string = Number(d.value);
			formattedValue = Number.isInteger(formattedValue)
				? formattedValue
				: formattedValue.toFixed(2);
			arr.push([d.date.toISOString().slice(0, 10), formattedValue]);
		});
		return arr;
	};

	let option: any;

	onMount(async () => {
		option = {
			yAxis: {
				type: 'value',
				splitLine: {
					show: false
				},
				axisLabel: {
					formatter: (v: number) => {
						return formatNumber(v, currency ? 'currency' : 'decimal');
					}
				},
				axisTick: {
					alignWithLabel: true
				}
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: { type: 'cross' },
				formatter: (params: any) => {
					return `${
						params[0].axisValueLabel
					}<br /><div style="display:flex;justify-content:space-between;"><div>${
						params[0].marker
					}</div> <div><b>${formatNumber(
						params[0].value[1],
						currency ? 'currency' : 'decimal',
						'standard'
					)}</b></div></div>`;
				}
			},
			dataZoom: [
				{
					type: 'slider',
					minValueSpan: 2592000000,
					dataBackground: {
						areaStyle: {
							color: '#E6E5E5'
						}
					},
					selectedDataBackground: {
						lineStyle: {
							color: '#0D0D0D'
						},
						areaStyle: {
							color: '#0D0D0D'
						}
					},
					brushStyle: { color: 'rgba(34, 197, 94,0.25)' },
					fillerColor: 'rgba(34, 197, 94,0.25)',
					handleStyle: {
						borderColor: '#0D0D0D',
						opacity: '0.5'
					},
					moveHandleSize: 10,
					moveHandleStyle: {
						color: '#0D0D0D',
						borderCap: 'square'
					},
					emphasis: {
						moveHandleStyle: {
							color: '#E6E5E5',
							borderCap: 'square'
						}
					}
				}
			],
			series: [
				{
					data: formatData(data),
					type: 'line',
					smooth: 0.25,
					symbol: 'none',
					areaStyle: {
						color: '#0D0D0D',
						opacity: 0.85
					},
					markLine: {
						symbol: 'none',
						lineStyle: {
							color: '#21CC51'
						},
						data: [
							{
								type: 'average',
								name: 'avg',
								label: {
									position: 'end',
									formatter: (params: any) => {
										return `${params.name}: ${formatNumber(
											params.value,
											currency ? 'currency' : 'decimal'
										)}`;
									}
								}
							},
							[
								{
									symbol: 'none',
									x: '90%',
									yAxis: 'max'
								},
								{
									symbol: 'circle',
									label: {
										position: 'start',
										formatter: (params: any) => {
											return `${params.name}: ${formatNumber(
												params.value,
												currency ? 'currency' : 'decimal'
											)}`;
										}
									},
									type: 'max',
									name: 'max'
								}
							],
							[
								{
									symbol: 'none',
									x: '90%',
									yAxis: 'min'
								},
								{
									symbol: 'circle',
									label: {
										position: 'start',
										formatter: (params: any) => {
											return `${params.name}: ${formatNumber(
												params.value,
												currency ? 'currency' : 'decimal'
											)}`;
										}
									},
									type: 'min',
									name: 'min'
								}
							]
						]
					}
				}
			]
		};
	});
</script>

<EChart {option} width={1500} height={500} />
