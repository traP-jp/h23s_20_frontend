import axios from 'axios'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { meState } from '@/stores/user'
import { User } from '@/types/user'

import { getApiOrigin } from '../../env'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
	const [me, setMe] = useRecoilState(meState)

	useEffect(() => {
		if (me.traq_id) return
		;(async () => {
			try {
				const me: User = await axios.get(`${getApiOrigin()}/me`, { withCredentials: true })
				setMe(me)
			} catch {
				location.href = `${getApiOrigin()}/auth`
			}
		})()
	}, [setMe])

	return children
}
