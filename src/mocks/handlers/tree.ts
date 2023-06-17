import { rest } from 'msw'

export const treeHanlders = (apiOrigin: string) => {
	const sample = rest.get(`${apiOrigin}/:userID/tree`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				branch_count: 2,
				leaves: {
					x: 0,
					y: 12,
					color: 'A2F6A0',
					size: 'small',
				},
			}),
		)
	})

	return { sample }
}
