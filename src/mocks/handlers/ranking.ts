import { rest } from 'msw'

export const sampleHanlders = (apiOrigin: string) => {
	const sample = rest.get(`${apiOrigin}/ranking`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
                {
                    user_id:"mehm8128",
                    points:100
                },
            ]),
		)
	})

	return { sample }
}
