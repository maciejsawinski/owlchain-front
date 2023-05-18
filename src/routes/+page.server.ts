import type { PageServerLoad } from './$types';

import prisma from '$lib/server/prisma';
import transformPrismaData from '$lib/server/transformPrismaData';

export const load = (async () => {
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

	return { chains };
}) satisfies PageServerLoad;
