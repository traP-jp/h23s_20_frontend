import { atom } from 'recoil'

import { User } from '@/types/user'

export const meState = atom<User>({
	key: 'meState',
	default: {
		atcoder_id: null,
		atcoder_point_type: null,
		atcoder_total_ac: 0,
		github_id: null,
		github_point_type: null,
		github_total_contributions: 0,
		total_point: 100,
		traq_id: 'mehm8128',
		traq_point_type: null,
		traq_total_posts: 0,
	},
})
