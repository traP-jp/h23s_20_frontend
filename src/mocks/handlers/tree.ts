import { rest } from 'msw'

import { getRandomArbitrary, getRandomColor } from '@/mocks/handlers/utils'

const response = [
	{
		point: getRandomArbitrary(30, 1000),
		branch_count: 13,
		leaves: Array(30)
			.fill(null)
			.map(() => ({
				x: getRandomArbitrary(-400, 400),
				y: getRandomArbitrary(200, 800),
				color: getRandomColor(),
				size: 'middle',
			})),
	},
	{
		point: getRandomArbitrary(30, 1000),
		branch_count: 13,
		leaves: Array(30)
			.fill(null)
			.map(() => ({
				x: getRandomArbitrary(-400, 400),
				y: getRandomArbitrary(200, 800),
				color: getRandomColor(),
				size: 'middle',
			})),
	},
	{
		point: getRandomArbitrary(30, 1000),
		branch_count: 14,
		leaves: Array(1)
			.fill(null)
			.map(() => ({
				x: getRandomArbitrary(-200, 200),
				y: getRandomArbitrary(200, 800),
				color: getRandomColor(),
				size: 'middle',
			})),
	},
]

export const treeHanlders = (apiOrigin: string) => {
	const fetchTree = rest.get(`${apiOrigin}/:userID/trees`, (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(response))
	})

	return { fetchTree }
}
