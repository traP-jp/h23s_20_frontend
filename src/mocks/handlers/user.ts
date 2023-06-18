import { rest } from 'msw'

export const usersHandlers = (apiOrigin: string) => {
	const updateUserID = rest.get(`${apiOrigin}/users`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					traq_id: 'mehm8128',
				},
				{
					traq_id: 'irori',
				},
				{
					traq_id: 'Apple',
				},
				{
					traq_id: 'shirasu_oisi',
				},
				{
					traq_id: 'sokugame',
				},
			]),
		)
	})

	return { updateUserID }
}
