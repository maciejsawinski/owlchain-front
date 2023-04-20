import prisma from '$lib/server/prisma';

export const load = async () => {
	const response = await prisma.chains.findMany({
		where: { is_active: true },
		select: {
			name: true,
			tps: {
				select: {
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 1
			},
			daa: {
				select: {
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 1
			},
			tvl: {
				select: {
					value: true
				},
				orderBy: {
					date: 'desc'
				},
				take: 1
			}
		}
	});

	return { chains: response };
};
