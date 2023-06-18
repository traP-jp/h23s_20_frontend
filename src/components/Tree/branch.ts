import * as PIXI from 'pixi.js'

const TRUNC_LENGTH = 100
const BRANCH_LENGTH = 200

export const branchDrawConstructor = (branchCount: number, leavesCount: number) => {
	const topCount = Math.ceil(branchCount / 6)
	return (g: PIXI.Graphics) => {
		if (0 <= branchCount) {
			branchConstructor1(g, leavesCount)
		}
		if (7 <= branchCount) {
			branchConstructor(g, 1, leavesCount)
		}
		if (13 <= branchCount) {
			branchConstructor(g, 2, leavesCount)
		}
		if (19 <= branchCount) {
			branchConstructor(g, 3, leavesCount)
		}
		if (25 <= branchCount) {
			branchConstructor(g, 4, leavesCount)
		}

		// //幹最上部
		// g.beginFill('#000000')
		// g.moveTo(-20, -topCount * TRUNC_LENGTH)
		// g.lineTo(20, Math.floor(-(topCount + 0.5) * TRUNC_LENGTH))
		// g.lineTo(20, Math.floor(-(topCount + 0.5) * TRUNC_LENGTH))
		// g.lineTo(-20, -topCount * TRUNC_LENGTH)
		// g.lineTo(-20, -topCount * TRUNC_LENGTH)
		// g.endFill()
	}
}

const branchConstructor1 = (g: PIXI.Graphics, b: number) => {
	if (b !== 30) {
		g.beginFill('#cc9d56')
		//if (b !== 30) {
		// 	g.lineStyle(1, '#FF0000')
		//}
	} else {
		g.beginFill('#F2BA65')
	}
	//幹
	g.moveTo(-20, 0)
	g.lineTo(20, 0)
	g.lineTo(20, -2 * TRUNC_LENGTH)
	g.lineTo(-20, -2 * TRUNC_LENGTH)
	g.lineTo(-20, 0)
	g.endFill()
}

const branchConstructor = (g: PIXI.Graphics, num: number, b: number) => {
	if (b !== 30) {
		g.beginFill('#cc9d56')
		// if (b !== 30) {
		// 	g.lineStyle(1, '#FF0000')
		// }
	} else {
		g.beginFill('#F2BA65')
	}
	//幹
	g.moveTo(-20, -num * TRUNC_LENGTH)
	g.lineTo(20, -num * TRUNC_LENGTH)
	g.lineTo(20, -(num + 1) * TRUNC_LENGTH)
	g.lineTo(-20, -(num + 1) * TRUNC_LENGTH)
	g.lineTo(-20, -num * TRUNC_LENGTH)

	//枝
	g.moveTo(-10, -num * TRUNC_LENGTH)
	g.lineTo((num % 2 ? -1 : 1) * (1.5 * BRANCH_LENGTH + 4), -(num + 1) * TRUNC_LENGTH)
	g.lineTo((num % 2 ? -1 : 1) * (1.5 * BRANCH_LENGTH - 2), -((num + 1) * TRUNC_LENGTH + 14))
	g.lineTo(-10, -(num * TRUNC_LENGTH + 20))
	g.endFill()
}
