<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col justify-center">
	<div class="flex justify-center text-2xl font-bold">{$page.status}: {$page.error?.message}</div>
	<div class="flex justify-center mt-5">
		<a href="/"><button class="btn lowercase">Back to homepage</button></a>
	</div>
</div>
