export default (n: number | bigint, s: 'decimal' | 'currency') => {
	if (typeof n !== 'number' && typeof n !== 'bigint') return n;

	const f = new Intl.NumberFormat('en-US', {
		style: s,
		currency: s === 'currency' ? 'USD' : undefined,
		notation: 'compact'
	});
	return f.format(n);
};
