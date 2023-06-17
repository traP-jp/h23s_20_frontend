export type LeafColor = '#C9FF9F' | '#A2F6A0' | '#94E093' | '#FDA9FF' | '#A8F9EF' | '#FFA3A3'

export interface Leaf {
	x: number
	y: number
	color: LeafColor
	size: 'small' | 'middle' | 'large'
}

export interface Tree {
	point: number
	branchCount: number
	leaves: Leaf[]
}
