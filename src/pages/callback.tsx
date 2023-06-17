import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Callback() {
	const router = useRouter()
	const code = router.query.code as string

	useEffect(() => {
		;(async () => {
			await axios.get(`http://localhost:8000/callback?code=${code}`, {
				withCredentials: true,
			})
			router.push('/')
		})()
	}, [])
	return null
}
