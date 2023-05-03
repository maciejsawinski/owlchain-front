import { error } from '@sveltejs/kit';

import prisma from '$lib/server/prisma';

export const load = async ({ params }) => {
	const response = await prisma.chains.findFirst({
		where: { name: params.chain },
		select: {
			name: true
		}
	});

	if (!response) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return { chain: response };
};
