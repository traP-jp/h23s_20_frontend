import { rest } from 'msw'

import { getRandomArbitrary, getRandomColor } from '@/mocks/handlers/utils'

export const treeHanlders = (apiOrigin: string) => {
	const fetchTree = rest.get(`${apiOrigin}/:userID/tree`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					point: getRandomArbitrary(30, 1000),
					branch_count: 2,
					leaves: Array(30)
						.fill(null)
						.map(() => ({
							x: getRandomArbitrary(-200, 200),
							y: getRandomArbitrary(200, 800),
							color: getRandomColor(),
							size: 'middle',
						})),
				},
			]),
		)
	})

	return { fetchTree }
}
