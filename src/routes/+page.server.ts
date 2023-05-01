import prisma from '$lib/server/prisma';
import transformPrismaDataForChart from '$lib/server/transformPrismaDataForChart';

export const load = async () => {
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
					date: 'asc'
				}
			},
			daa: {
				select: {
					date: true,
					value: true
				},
				orderBy: {
					date: 'asc'
				}
			}
		}
	});

	const chains = response.map(({ name, tps, daa }) => {
		return { name, tps: transformPrismaDataForChart(tps), daa: transformPrismaDataForChart(daa) };
	});

	return { chains };
};
