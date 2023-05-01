export default (
	rows: {
		date: Date;
		value: number | bigint;
	}[]
) => {
	return rows.map(({ date, value }) => {
		return {
			time: date.toISOString().slice(0, 10),
			value: Number(value)
		};
	});
};
