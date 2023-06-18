import { rest } from 'msw'

export const progressHandlers = (apiOrigin: string) => {
	const postProgress = rest.post(`${apiOrigin}/points`, (req, res, ctx) => {
		return res(ctx.status(200))
	})

	return { postProgress }
}
