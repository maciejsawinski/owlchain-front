<script>
	import { page } from '$app/stores';
</script>

<div class="prose flex justify-center">
	<h1>{$page.status}: {$page.error?.message}</h1>
</div>
