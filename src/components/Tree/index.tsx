import { Stage, Graphics } from '@pixi/react'
import * as PIXI from 'pixi.js'
import { Fragment } from 'react'

import { branchDrawConstructor } from '@/components/Tree/branch'
import { getRandomArbitrary } from '@/mocks/handlers/utils'
import { Leaf, Tree as TreeType } from '@/types/tree'

export default function Tree({ trees }: { trees: TreeType[] }) {
	const leafDrawConstructor = (leaf: Leaf) => {
		const leafData = {
			...leaf,
			y: -leaf.y, // pixijsの座標が左上からなため
		}
		return (g: PIXI.Graphics) => {
			g.beginFill(leafData.color)
			g.lineStyle(1, getLeafBorderColor(leafData))
			g.moveTo(leafData.x - 50, leafData.y - 50)
			g.lineTo(leafData.x + 50, leafData.y - 50)
			g.lineTo(leafData.x + 50, leafData.y + 50)
			g.lineTo(leafData.x - 50, leafData.y + 50)
			g.lineTo(leafData.x - 50, leafData.y - 50)
			g.endFill()
		}
	}

	const getLeafBorderColor = (leaf: Leaf) => {
		switch (leaf.color) {
			case '#C9FF9F':
				return '#A2F6A0'
			case '#A2F6A0':
				return '#94E093'
			case '#94E093':
				return '#87cc85'
			case '#FDA9FF':
				return '#e69be8'
			case '#A8F9EF':
				return '#99e4db'
			case '#FFA3A3':
				return '#dc8c8c'
			default:
				return '#000000'
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

	const baseCoodinates = Array(trees.length)
		.fill(0)
		.map((_, index) =>
			index === trees.length - 1 ? { x: 390, y: 600 } : { x: getRandomArbitrary(0, 800), y: 500 },
		)

	if (trees.length === 0) return <></>

	return (
		<Stage
			width={800}
			height={600}
			options={{
				backgroundColor: 0xffffff,
				preserveDrawingBuffer: true,
			}}
		>
			{trees.map((tree, index) => {
				return (
					<Fragment key={index}>
						<Graphics
							x={baseCoodinates[index].x}
							y={baseCoodinates[index].y}
							draw={branchDrawConstructor(trees[index].branch_count, trees[index].leaves.length)}
						/>
						{tree.leaves // @ts-ignore
							.toSorted((a: Leaf, b: Leaf) => {
								const aZIndex = calcZIndex(a)
								const bZIndex = calcZIndex(b)
								if (aZIndex > bZIndex) return 1
								if (aZIndex < bZIndex) return -1
								return 0
							})
							.map((leaf: Leaf) => (
								<Graphics
									x={baseCoodinates[index].x}
									y={baseCoodinates[index].y}
									draw={leafDrawConstructor(leaf)}
									key={`${leaf.x}${leaf.y}`}
								/>
							))}
					</Fragment>
				)
			})}
		</Stage>
	)
}
