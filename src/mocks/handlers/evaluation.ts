import { rest } from 'msw'

export const evaluationHandlers = (apiOrigin: string) => {
	const updateEvaluation = rest.put(`${apiOrigin}/me/config`, (req, res, ctx) => {
		return res(
			ctx.status(200)
		)
	})

	return { updateEvaluation }
}