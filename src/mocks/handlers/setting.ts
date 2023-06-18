import { rest } from 'msw'

export const settingHandlers = (apiOrigin: string) => {
	const updateSetting = rest.put(`${apiOrigin}/me`, (req, res, ctx) => {
		return res(ctx.status(200))
	})

	return { updateSetting }
}
