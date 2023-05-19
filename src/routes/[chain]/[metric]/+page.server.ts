import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import prisma from '$lib/server/prisma';
import { redis } from '$lib/server/redis';
import { replacer, reviver } from '$lib/server/transformJsonData';
import availableMetrics from '$lib/data/availableMetrics.js';

export const load = (async ({ params, setHeaders }) => {
	const metric = availableMetrics.filter((metric) => {
		return metric.slug === params.metric;
	});

	if (metric.length === 0) {
		throw error(404, {
			message: 'Not found'
		});
	}

	const cached = await redis.get(`${params.chain}.${params.metric}`);

	if (cached) {
		return JSON.parse(cached, reviver);
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

	setHeaders({ 'cache-control': 'max-age=14400' });
	await redis.set(
		`${params.chain}.${params.metric}`,
		JSON.stringify({ chain: response, metric: metric[0] }, replacer),
		'EX',
		14400
	);

	return { chain: response, metric: metric[0] };
}) satisfies PageServerLoad;
