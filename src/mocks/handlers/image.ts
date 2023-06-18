import { rest } from 'msw'

export const imageHandlers = (apiOrigin: string) => {
	const postImage = rest.post(`${apiOrigin}/image`, (req, res, ctx) => {
		return res(ctx.status(200))
	})

	return { postImage }
}
