import axios from 'axios'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { initMock } from '@/mocks/main'
import { meState } from '@/stores/user'
import '@/styles/globals.css'
import { User } from '@/types/user'

import type { AppProps } from 'next/app'

initMock()

export default function App({ Component, pageProps }: AppProps) {
	const [me, setMe] = useRecoilState(meState)

	useEffect(() => {
		if (me.id) return
		;(async () => {
			try {
				const me: User = await axios.get('http://localhost:8000')
				setMe(me)
			} catch {
				location.href = `http"//localhost:8000/authorize`
			}
		})()
	}, [me, setMe])

	return <Component {...pageProps} />
}
