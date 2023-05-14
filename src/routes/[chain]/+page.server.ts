import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import prisma from '$lib/server/prisma';

export const load = (async ({ params }) => {
	const response = await prisma.chains.findFirst({
		where: { name: params.chain },
		select: {
			name: true,
			website_url: true,
			github_url: true,
			daa: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 30
			},
			dt: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 30
			},
			dv: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 30
			},
			ethap: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 30
			},
			fserc20: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 30
			},
			fterc20: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 30
			},
			fteth: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 30
			},
			mg: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 30
			},
			smc: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 30
			},
			tg: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 30
			},
			tps: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 30
			},
			tvl: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 30
			}
		}
	});

	if (!response) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return { chain: response };
}) satisfies PageServerLoad;
