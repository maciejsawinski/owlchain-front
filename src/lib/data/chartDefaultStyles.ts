export default {
	color: '#0D0D0D',
	textStyle: {
		fontFamily: 'Fragment Mono',
		color: '#0D0D0D'
	},
	animationDurationUpdate: 50,
	animationDuration: 500,
	animationEasing: 'backOut',
	graphic: {
		elements: [
			{
				type: 'text',
				top: 'center',
				left: 'center',
				style: {
					text: '🦉',
					font: '4rem "Fragment Mono"',
					opacity: 0.33
				}
			}
		]
	},
	xAxis: {
		type: 'time',
		axisTick: {
			alignWithLabel: true
		}
	}
};
