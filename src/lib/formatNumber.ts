export default (
	n: number | bigint,
	s: 'decimal' | 'currency',
	f: 'compact' | 'standard' = 'compact'
) => {
	if (typeof n !== 'number' && typeof n !== 'bigint') return n;

	const r = new Intl.NumberFormat('en-US', {
		style: s,
		currency: s === 'currency' ? 'USD' : undefined,
		notation: f
	});
	return r.format(n);
};
