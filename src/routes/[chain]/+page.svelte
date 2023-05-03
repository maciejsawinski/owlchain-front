<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { chain } = data;

	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
</script>

<svelte:head>
	<title>🦉⛓ | {chain.name}</title>
</svelte:head>

<Breadcrumbs steps={[{ name: chain.name }]} />
<div class="flex">
	<div>
		<ul class="menu bg-base-100 w-56">
			<li><a>Item 1</a></li>
			<li><a>Item 2</a></li>
			<li><a>Item 3</a></li>
		</ul>
	</div>
	<div class="flex flex-col">
		<div class="stats">
			<div class="stat">
				<div class="self-center stat-value text-primary">Ethereum</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-secondary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-8 h-8 stroke-current"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						/></svg
					>
				</div>
				<div class="stat-title">Page Views</div>
				<div class="stat-value text-secondary">2.6M</div>
				<div class="stat-desc">21% more than last month</div>
			</div>

			<div class="stat">
				<div class="stat-figure text-secondary">
					<div class="avatar online">
						<div class="w-16 rounded-full">
							<img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
						</div>
					</div>
				</div>
				<div class="stat-value">86%</div>
				<div class="stat-title">Tasks done</div>
				<div class="stat-desc text-secondary">31 tasks remaining</div>
			</div>
		</div>
		<div>
			<div class="card w-96 bg-base-100 shadow">
				<div class="card-body">
					<h2 class="card-title">Shoes!</h2>
					<p>If a dog chews shoes whose shoes does he choose?</p>
				</div>
				<figure>
					<img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
				</figure>
			</div>
		</div>
	</div>
</div>
