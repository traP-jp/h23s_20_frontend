import { rest } from 'msw'

export const usersHandlers = (apiOrigin: string) => {
	const updateUserID = rest.get(`${apiOrigin}/users`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					id: 'mehm8128',
				},
				{
					id: 'Apple',
				},
				{
					id: 'irori',
				},
			]),
		)
	})

	return { updateUserID }
}
