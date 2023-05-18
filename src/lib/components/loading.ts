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

	function setLoading(isLoading: boolean) {
		update(() => {
			return {
				status: isLoading ? 'LOADING' : 'IDLE'
			};
		});
	}

	return { subscribe, update, set, setNavigate, setLoading };
};

export const loading = newLoading();
