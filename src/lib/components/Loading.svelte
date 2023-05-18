<script lang="ts">
	import { loading } from '$lib/components/loading';

	$: if ($loading.status === 'NAVIGATING') {
		setTimeout(() => {
			if ($loading.status === 'NAVIGATING') {
				$loading.status = 'LOADING';
			}
		}, 400);
	}
</script>

<div class="flex justify-center content-center h-56">
	<progress class="self-center progress w-56" />
</div>
