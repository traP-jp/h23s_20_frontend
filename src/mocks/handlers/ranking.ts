import { rest } from 'msw'

export const rankingHanlders = (apiOrigin: string) => {
	const fetchRanking = rest.get(`${apiOrigin}/ranking`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					traq_id: 'mehm8128',
					total_point: 100,
				},
				{
					traq_id: 'mehm8128',
					total_point: 90,
				},
				{
					traq_id: 'mehm8128',
					total_point: 80,
				},
				{
					traq_id: 'mehm8128',
					total_point: 70,
				},
				{
					traq_id: 'mehm8128',
					total_point: 60,
				},
				{
					traq_id: 'mehm8128',
					total_point: 60,
				},
				{
					traq_id: 'mehm8128',
					total_point: 60,
				},
				{
					traq_id: 'mehm8128',
					total_point: 60,
				},
			]),
		)
	})

	return { fetchRanking }
}
