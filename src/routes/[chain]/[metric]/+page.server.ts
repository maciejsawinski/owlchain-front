import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import prisma from '$lib/server/prisma';
import availableMetrics from '$lib/data/availableMetrics.js';

export const load = (async ({ params }) => {
	const metric = availableMetrics.filter((metric) => {
		return metric.slug === params.metric;
	});

	if (metric.length === 0) {
		throw error(404, {
			message: 'Not found'
		});
	}

	const response = await prisma.chains.findFirst({
		where: { name: params.chain },
		select: {
			name: true,
			[params.metric]: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				}
			}
		}
	});

	if (!response) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return { chain: response, metric: metric[0] };
}) satisfies PageServerLoad;
