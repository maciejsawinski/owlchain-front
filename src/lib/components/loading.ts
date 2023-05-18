import { writable } from 'svelte/store';

const newLoading = () => {
	const { subscribe, update, set } = writable({
		status: 'IDLE'
	});

	function setNavigate(isNavigating: boolean) {
		update(() => {
			return {
				status: isNavigating ? 'NAVIGATING' : 'IDLE'
			};
		});
	}

	return { subscribe, update, set, setNavigate };
};

export const loading = newLoading();
