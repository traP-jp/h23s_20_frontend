import { LeafColor } from '@/types/tree'

export const getRandomArbitrary = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) + min)
}
export const getRandomColor = () => {
	const colors: LeafColor[] = [
		'#C9FF9F',
		'#C9FF9F',
		'#C9FF9F',
		'#C9FF9F',
		'#C9FF9F',
		'#C9FF9F',
		'#A2F6A0',
		'#A2F6A0',
		'#A2F6A0',
		'#A2F6A0',
		'#A2F6A0',
		'#A2F6A0',
		'#94E093',
		'#94E093',
		'#94E093',
		'#94E093',
		'#94E093',
		'#94E093',
		'#FDA9FF',
		'#A8F9EF',
		'#FFA3A3',
	]
	return colors[Math.floor(Math.random() * colors.length)]
}
