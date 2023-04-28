export default (a: number | bigint, b: number | bigint): string => {
	if (a > Number.MAX_SAFE_INTEGER) a = Number.MAX_SAFE_INTEGER;
	if (b > Number.MAX_SAFE_INTEGER) b = Number.MAX_SAFE_INTEGER;

	a = Number(a);
	b = Number(b);

	const change = b - a;
	return `${((change / Math.abs(a)) * 100).toFixed(2)}%`;
};
