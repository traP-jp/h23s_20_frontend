import { rest } from 'msw'

export const sampleHanlders = (apiOrigin: string) => {
	const sample = rest.get(`${apiOrigin}/sample`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				sample: 'sample',
			}),
		)
	})

	return { sample }
}
