import axios from 'axios'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { meState } from '@/stores/user'
import { User } from '@/types/user'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
	const [me, setMe] = useRecoilState(meState)

	useEffect(() => {
		if (me.id) return
		;(async () => {
			try {
				const me: User = await axios.get('http://localhost:8000')
				setMe(me)
			} catch {
				location.href = `http://localhost:8000/authorize`
			}
		})()
	}, [me, setMe])

	return children
}
