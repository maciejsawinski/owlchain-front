import type { PageServerLoad } from './$types';

import prisma from '$lib/server/prisma';
import { redis } from '$lib/server/redis';
import { replacer, reviver } from '$lib/server/transformJsonData';
import transformPrismaData from '$lib/server/transformPrismaData';

export const load = (async ({ setHeaders }) => {
	const cached = await redis.get('home');

	if (cached) {
		return JSON.parse(cached, reviver);
	}

	const response = await prisma.chains.findMany({
		where: { is_active: true },
		select: {
			name: true,
			tps: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 365
			},
			daa: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 365
			}
		}
	});

	const chains = response.map(({ name, tps, daa }) => {
		return { name, tps: transformPrismaData(tps), daa: transformPrismaData(daa) };
	});

	setHeaders({ 'cache-control': 'max-age=14400' });
	await redis.set('home', JSON.stringify({ chains }, replacer), 'EX', 14400);

	return { chains };
}) satisfies PageServerLoad;
