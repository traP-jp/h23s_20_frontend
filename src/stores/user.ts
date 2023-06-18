import { atom } from 'recoil'

import { User } from '@/types/user'

export const meState = atom<User>({
	key: 'meState',
	default: {
		traq_id: '',
	},
})
