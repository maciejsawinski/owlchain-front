import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// random seed data
interface seedObject {
	date: string;
	value: number;
}
const getRandomValue = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1) + min);
const generateRandomData = (startDate: Date, endDate: Date, min: number, max: number) => {
	const data: seedObject[] = [];
	const currentDate = new Date(startDate);
	const endDateObj = new Date(endDate);

	while (currentDate <= endDateObj) {
		const randomValue = getRandomValue(min, max);
		data.push({
			date: currentDate.toISOString(),
			value: randomValue
		});

		currentDate.setDate(currentDate.getDate() + 1);
	}

	return data;
};
const daa = generateRandomData(new Date('2015-09-01'), new Date('2023-05-01'), 1, 50000);
const dt = generateRandomData(new Date('2015-09-01'), new Date('2023-05-01'), 1000, 2000000);
const dv = generateRandomData(new Date('2015-09-01'), new Date('2023-05-01'), 1, 10000000000);
const smc = generateRandomData(new Date('2015-09-01'), new Date('2023-05-01'), 1, 10000000000);
const tvl = generateRandomData(new Date('2015-09-01'), new Date('2023-05-01'), 1, 10000000000);
const tps = generateRandomData(new Date('2015-09-01'), new Date('2023-05-01'), 1, 25);
const ethap = generateRandomData(new Date('2015-09-01'), new Date('2023-05-01'), 0, 5000);
const mg = generateRandomData(new Date('2015-09-01'), new Date('2023-05-01'), 1, 150);
const tg = generateRandomData(new Date('2015-09-01'), new Date('2023-05-01'), 1, 10000000000);
const fteth = generateRandomData(new Date('2015-09-01'), new Date('2023-05-01'), 1, 100);
const fterc20 = generateRandomData(new Date('2015-09-01'), new Date('2023-05-01'), 1, 500);
const fserc20 = generateRandomData(new Date('2015-09-01'), new Date('2023-05-01'), 1, 1000);

async function main() {
	await prisma.chains.create({
		data: {
			name: 'ethereum',
			defillama_name: 'Ethereum',
			is_active: true,
			is_new: false,
			daa: {
				create: daa
			},
			dt: {
				create: dt
			},
			dv: {
				create: dv
			},
			smc: {
				create: smc
			},
			tvl: {
				create: tvl
			},
			tps: {
				create: tps
			},
			ethap: {
				create: ethap
			},
			mg: {
				create: mg
			},
			tg: {
				create: tg
			},
			fteth: {
				create: fteth
			},
			fterc20: {
				create: fterc20
			},
			fserc20: {
				create: fserc20
			}
		}
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
