<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import StatLink from './_components/StatLink.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	const { chain } = data;
</script>

<svelte:head>
	<title>🦉⛓ | {chain.name}</title>
</svelte:head>

<Breadcrumbs steps={[{ name: chain.name }]} />

<div class="flex flex-col px-10">
	<div class="flex flex-col mb-5">
		<h3 class="text-xl font-bold">on-chain activity</h3>
		<div class="flex flex-wrap p-2.5 gap-2.5">
			<StatLink
				chain={chain.name}
				metric="dt"
				name="daily transactions"
				valueCurrent={Number(chain.dt[0].value)}
				valueOld={Number(chain.dt[29].value)}
			/>
			<StatLink
				chain={chain.name}
				metric="tps"
				name="tps"
				valueCurrent={Number(chain.tps[0].value)}
				valueOld={Number(chain.tps[29].value)}
			/>
			<StatLink
				chain={chain.name}
				metric="daa"
				name="daily active addresses"
				valueCurrent={Number(chain.daa[0].value)}
				valueOld={Number(chain.daa[29].value)}
			/>
			<StatLink
				chain={chain.name}
				metric="tg"
				name="total gas used"
				valueCurrent={Number(chain.tg[0].value)}
				valueOld={Number(chain.tg[29].value)}
			/>
		</div>
	</div>
	<div class="flex flex-col mb-5">
		<h3 class="text-xl font-bold">finantial</h3>
		<div class="flex flex-wrap p-2.5 gap-2.5">
			<StatLink
				chain={chain.name}
				metric="tvl"
				name="tvl"
				type="currency"
				valueCurrent={Number(chain.tvl[0].value)}
				valueOld={Number(chain.tvl[29].value)}
			/>
			<StatLink
				chain={chain.name}
				metric="smc"
				name="stablecoin marketcap"
				type="currency"
				valueCurrent={Number(chain.smc[0].value)}
				valueOld={Number(chain.smc[29].value)}
			/>
			<StatLink
				chain={chain.name}
				metric="dv"
				name="dexes protocols volume"
				type="currency"
				valueCurrent={Number(chain.dv[0].value)}
				valueOld={Number(chain.dv[29].value)}
			/>
		</div>
	</div>
	<div class="flex flex-col">
		<h3 class="text-xl font-bold">prices</h3>
		<div class="flex flex-wrap p-2.5 gap-2.5">
			<StatLink
				chain={chain.name}
				metric="mg"
				name="median gas price"
				valueCurrent={Number(chain.mg[0].value)}
				valueOld={Number(chain.mg[29].value)}
			/>
			<StatLink
				chain={chain.name}
				metric="ethap"
				name="average eth price"
				type="currency"
				valueCurrent={Number(chain.ethap[0].value)}
				valueOld={Number(chain.ethap[29].value)}
			/>
			<StatLink
				chain={chain.name}
				metric="fteth"
				name="fee transfer eth"
				type="currency"
				valueCurrent={Number(chain.fteth[0].value)}
				valueOld={Number(chain.fteth[29].value)}
			/>
			<StatLink
				chain={chain.name}
				metric="fterc20"
				name="fee transfer erc-20"
				type="currency"
				valueCurrent={Number(chain.fterc20[0].value)}
				valueOld={Number(chain.fterc20[29].value)}
			/>
			<StatLink
				chain={chain.name}
				metric="fserc20"
				name="fee swap erc-20"
				type="currency"
				valueCurrent={Number(chain.fserc20[0].value)}
				valueOld={Number(chain.fserc20[29].value)}
			/>
		</div>
	</div>
</div>
