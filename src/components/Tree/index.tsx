import { Stage, Graphics } from '@pixi/react'
import * as PIXI from 'pixi.js'

import { branchDrawConstructor } from '@/components/Tree/branch'
import { Leaf, LeafColor } from '@/types/tree'

const getRandomArbitrary = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) + min)
}
const getRandomColor = () => {
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

const mockLeaves: Leaf[] = Array(30)
	.fill(null)
	.map(() => ({
		x: getRandomArbitrary(-200, 200),
		y: getRandomArbitrary(200, 800),
		color: getRandomColor(),
		size: 'middle',
	}))

export default function Tree() {
	const leafDrawConstructor = (leaf: Leaf) => {
		const leafData = {
			...leaf,
			y: -leaf.y, // pixijsの座標が左上からなため
		}
		return (g: PIXI.Graphics) => {
			g.beginFill(leafData.color)
			g.moveTo(leafData.x - 50, leafData.y - 50)
			g.lineTo(leafData.x + 50, leafData.y - 50)
			g.lineTo(leafData.x + 50, leafData.y - 50)
			g.lineTo(leafData.x + 50, leafData.y + 50)
			g.lineTo(leafData.x - 50, leafData.y + 50)
			g.endFill()
		}
	}

	const calcZIndex = (leaf: Leaf) => {
		switch (leaf.color) {
			case '#C9FF9F':
				return 30
			case '#A2F6A0':
				return 20
			case '#94E093':
				return 10
			case '#FDA9FF':
				return 30
			case '#A8F9EF':
				return 20
			case '#FFA3A3':
				return 10
			default:
				return 10
		}
	}

	return (
		<Stage
			width={800}
			height={600}
			options={{
				backgroundColor: 0xffffff,
				preserveDrawingBuffer: true,
			}}
		>
			<Graphics x={400 - 10} y={600} draw={branchDrawConstructor(14)} zIndex={5} />
			{mockLeaves.map(leaf => (
				<Graphics
					x={400 - 10}
					y={600}
					draw={leafDrawConstructor(leaf)}
					key={`${leaf.x}${leaf.y}`}
					zIndex={calcZIndex(leaf)}
				/>
			))}
		</Stage>
	)
}
