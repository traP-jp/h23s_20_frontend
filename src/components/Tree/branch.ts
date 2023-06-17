import * as PIXI from 'pixi.js'

const TRUNC_LENGTH = 100
const BRANCH_LENGTH = 200

export const branchDrawConstructor = (branchCount: number) => {
	const topCount = Math.ceil(branchCount / 6)
	return (g: PIXI.Graphics) => {
		if (0 <= branchCount) {
			branchConstructor1(g)
		}
		if (7 <= branchCount) {
			branchConstructor2(g)
		}
		if (13 <= branchCount) {
			branchConstructor3(g)
		}
		if (19 <= branchCount) {
			branchConstructor4(g)
		}
		if (25 <= branchCount) {
			branchConstructor5(g)
		}
		console.log('topCount:', topCount)

		//幹最上部
		g.beginFill('#000000')
		g.moveTo(-10, -topCount * TRUNC_LENGTH)
		g.lineTo(10, -(topCount + 0.5) * TRUNC_LENGTH)
		g.lineTo(10, -(topCount + 0.5) * TRUNC_LENGTH)
		g.lineTo(-10, -topCount * TRUNC_LENGTH)
		g.lineTo(-10, -topCount * TRUNC_LENGTH)
		g.endFill()
	}
}

const branchConstructor1 = (g: PIXI.Graphics) => {
	g.beginFill('#F2BA65')
	//幹
	g.moveTo(-10, 0)
	g.lineTo(10, 0)
	g.lineTo(10, -2 * TRUNC_LENGTH)
	g.lineTo(-10, -2 * TRUNC_LENGTH)
	g.lineTo(-10, 0)
	g.endFill()
}

const branchConstructor2 = (g: PIXI.Graphics) => {
	g.beginFill('#F2BA65')
	//幹2
	g.moveTo(-10, -TRUNC_LENGTH)
	g.lineTo(10, -TRUNC_LENGTH)
	g.lineTo(10, -2 * TRUNC_LENGTH)
	g.lineTo(-10, -2 * TRUNC_LENGTH)
	g.lineTo(-10, -TRUNC_LENGTH)

	//枝1
	g.moveTo(-10, -TRUNC_LENGTH)
	g.lineTo(-(1.5 * BRANCH_LENGTH + 10), -2 * TRUNC_LENGTH)
	g.lineTo(-(1.5 * BRANCH_LENGTH - 2), -(2 * TRUNC_LENGTH + 20))
	g.lineTo(-10, -(TRUNC_LENGTH + 30))
	g.endFill()
}

const branchConstructor3 = (g: PIXI.Graphics) => {
	g.beginFill('#F2BA65')
	//幹3
	g.moveTo(-10, -2 * TRUNC_LENGTH)
	g.lineTo(10, -2 * TRUNC_LENGTH)
	g.lineTo(10, -3 * TRUNC_LENGTH)
	g.lineTo(-10, -3 * TRUNC_LENGTH)
	g.lineTo(-10, -2 * TRUNC_LENGTH)

	//枝2
	g.moveTo(-10, -2 * TRUNC_LENGTH)
	g.lineTo(1.5 * BRANCH_LENGTH + 10, -3 * TRUNC_LENGTH)
	g.lineTo(1.5 * BRANCH_LENGTH - 2, -(3 * TRUNC_LENGTH + 20))
	g.lineTo(-10, -(2 * TRUNC_LENGTH + 30))
	g.endFill()
}

const branchConstructor4 = (g: PIXI.Graphics) => {
	g.beginFill('#F2BA65')
	//幹4
	g.moveTo(-10, -3 * TRUNC_LENGTH)
	g.lineTo(10, -3 * TRUNC_LENGTH)
	g.lineTo(10, -4 * TRUNC_LENGTH)
	g.lineTo(-10, -4 * TRUNC_LENGTH)
	g.lineTo(-10, -3 * TRUNC_LENGTH)

	//枝3
	g.moveTo(-10, -3 * TRUNC_LENGTH)
	g.lineTo(-(1.5 * BRANCH_LENGTH + 10), -4 * TRUNC_LENGTH)
	g.lineTo(-(1.5 * BRANCH_LENGTH - 2), -(4 * TRUNC_LENGTH + 20))
	g.lineTo(-10, -(3 * TRUNC_LENGTH + 30))
	g.endFill()
}

const branchConstructor5 = (g: PIXI.Graphics) => {
	g.beginFill('#F2BA65')
	//幹4
	g.moveTo(-10, -4 * TRUNC_LENGTH)
	g.lineTo(10, -4 * TRUNC_LENGTH)
	g.lineTo(10, -5 * TRUNC_LENGTH)
	g.lineTo(-10, -5 * TRUNC_LENGTH)
	g.lineTo(-10, -4 * TRUNC_LENGTH)

	//枝3
	g.moveTo(-10, -4 * TRUNC_LENGTH)
	g.lineTo(1.5 * BRANCH_LENGTH + 10, -5 * TRUNC_LENGTH)
	g.lineTo(1.5 * BRANCH_LENGTH - 2, -(5 * TRUNC_LENGTH + 20))
	g.lineTo(-10, -(4 * TRUNC_LENGTH + 30))
	g.endFill()
}
