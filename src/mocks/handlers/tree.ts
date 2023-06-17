import { rest } from 'msw'

export const treeHanlders = (apiOrigin: string) => {
	const fetchTree = rest.get(`${apiOrigin}/userID/tree`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					point: 100000,
					branch_count: 5,
					leaves: {
						x: 3,
						y: 5,
						color: 'green',
						size: 'small',
					},
				},
				{
					point: 400000,
					branch_count: 5,
					leaves: {
						x: 3,
						y: 5,
						color: 'green',
						size: 'small',
					},
				},
				{
					point: 500000,
					branch_count: 5,
					leaves: {
						x: 3,
						y: 5,
						color: 'green',
						size: 'small',
					},
				},
				{
					point: 200000,
					branch_count: 5,
					leaves: {
						x: 3,
						y: 5,
						color: 'green',
						size: 'small',
					},
				},
			]),
		)
	})

	return { fetchTree }
}
