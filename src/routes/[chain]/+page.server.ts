import { error } from '@sveltejs/kit';

import prisma from '$lib/server/prisma';

export const load = async ({ params }) => {
	console.log(params);
	throw error(404, 'Not found');
};
