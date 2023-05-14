export default [
	{ slug: 'daa', name: 'daily active addresses', source: 'Blockchain RPC', currency: false },
	{ slug: 'dt', name: 'daily transactions', source: 'Blockchain RPC', currency: false },
	{ slug: 'dv', name: 'dexes protocols volume', source: 'Defillama', currency: true },
	{ slug: 'ethap', name: 'average eth price', source: 'Cryptowatch', currency: true },
	{
		slug: 'fserc20',
		name: 'fee swap erc-20',
		source: 'Blockchain RPC + Cryptowatch',
		currency: true
	},
	{
		slug: 'fterc20',
		name: 'fee transfer erc-20',
		source: 'Blockchain RPC + Cryptowatch',
		currency: true
	},
	{
		slug: 'fteth',
		name: 'fee transfer eth',
		source: 'Blockchain RPC + Cryptowatch',
		currency: true
	},
	{ slug: 'mg', name: 'median gas price', source: 'Blockchain RPC', currency: false },
	{ slug: 'smc', name: 'stablecoin marketcap', source: 'Defillama', currency: true },
	{ slug: 'tg', name: 'total gas used', source: 'Blockchain RPC', currency: false },
	{ slug: 'tps', name: 'tps', source: 'Blockchain RPC', currency: false },
	{ slug: 'tvl', name: 'tvl', source: 'Defillama', currency: true }
];
