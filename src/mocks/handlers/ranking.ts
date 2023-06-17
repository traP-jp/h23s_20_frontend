import { rest } from 'msw'

export const rankingHanlders = (apiOrigin: string) => {
	const fetchRanking = rest.get(`${apiOrigin}/ranking`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					user_id: 'mehm8128',
					points: 100,
				},
				{
					user_id: 'mehm8128',
					points: 90,
				},
				{
					user_id: 'mehm8128',
					points: 80,
				},
				{
					user_id: 'mehm8128',
					points: 70,
				},
				{
					user_id: 'mehm8128',
					points: 60,
				},
				{
					user_id: 'mehm8128',
					points: 60,
				},
				{
					user_id: 'mehm8128',
					points: 60,
				},
				{
					user_id: 'mehm8128',
					points: 60,
				},
			]),
		)
	})

	return { fetchRanking }
}
