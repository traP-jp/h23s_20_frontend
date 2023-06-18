import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { getApiOrigin } from '../../env'

export default function Callback() {
	const router = useRouter()
	const [code, setCode] = useState('')

	useEffect(() => {
		if (!router.isReady) return
		setCode(router.query.code as string)
	}, [router.isReady, router.query.code])

	useEffect(() => {
		if (!code) return
		;(async () => {
			const res = await axios.get(`${getApiOrigin()}/callback?code=${code}`, {
				withCredentials: true,
			})
			console.log(res.data)
			router.push('/')
		})()
	}, [code])
	return null
}
