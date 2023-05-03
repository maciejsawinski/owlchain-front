<script lang="ts">
	export let steps: { name: string; href?: string }[];
</script>

<div class="text-sm breadcrumbs mb-5">
	<ul>
		<li><a href="/">home</a></li>
		{#each steps as step, i}
			{#if step.href}<li><a href={step.href}>{step.name}</a></li>{:else}<li>{step.name}</li>{/if}
		{/each}
	</ul>
</div>
