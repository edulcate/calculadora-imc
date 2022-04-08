export type Level = {
	title: string;
	color: string;
	icon: 'down' | 'up';
	imc: number[];
	yourImc?: number;
}

export const levels: Level[] = [
	{
		title: 'Magreza',
		color: '#96A3AB',
		icon: 'down',
		imc: [0, 18.5],
	},
	{
		title: 'Normal',
		color: '#0EaD69',
		icon: 'up',
		imc: [18.6, 24.9],
	},
	{
		title: 'Sobrepeso',
		color: '#E2B039',
		icon: 'down',
		imc: [25, 30],
	},
	{
		title: 'Obesidade',
		color: '#C3423F',
		icon: 'down',
		imc: [39.1, 99],
	}
];

export const calculate = (height: number, weight: number): Level|null => {
	const imc = weight / (height * height);

	for (let i in levels) {
		if ( imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
			let levelCopy: Level = {...levels[i]};

			levelCopy.yourImc = parseFloat(imc.toFixed(2));
			return levelCopy;
		}
	}

	return null;
}