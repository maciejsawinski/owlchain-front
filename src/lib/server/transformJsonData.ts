/* eslint-disable @typescript-eslint/no-explicit-any */
export const replacer = (key: string, value: any): any => {
	if (typeof value === 'bigint') {
		return { __bigintval__: value.toString() };
	}
	return value;
};

export const reviver = (key: string, value: any): any => {
	if (value != null && typeof value === 'object' && '__bigintval__' in value) {
		return BigInt(value['__bigintval__']);
	}
	return value;
};
