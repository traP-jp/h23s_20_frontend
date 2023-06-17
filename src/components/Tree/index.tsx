import { Stage, Graphics } from '@pixi/react'
import * as PIXI from 'pixi.js'

import { branchDrawConstructor } from '@/components/Tree/branch'
import { Leaf, Tree as TreeType } from '@/types/tree'

export default function Tree({ tree }: { tree: TreeType[] }) {
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
			{tree[0].leaves.map(leaf => (
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
