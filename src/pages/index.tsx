import axios from 'axios'
import { Button, toaster } from 'evergreen-ui'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import styles from '@/styles/Home.module.css'
import { Tree } from '@/types/tree'

import { GetWindowSize as getWindowSize } from '../hooks/GetWindowSize'

const inter = Inter({ subsets: ['latin'] })

export const getRandomString = (n: number): string => {
	const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

	return Array.from(crypto.getRandomValues(new Uint32Array(n)))
		.map(v => S[v % S.length])
		.join('')
}

export default function Home() {
	const { width, height } = getWindowSize()
	const [data, setData] = useState<Tree[]>([])
	const totalPoint = data.reduce((a, b) => a + b.point, 0)

	useEffect(() => {
		const fetch = async () => {
			const res = await axios.get<Tree[]>('http://localhost:8000/userID/tree')
			setData(res.data)
		}
		fetch()
	}, [])

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={`${styles.main} ${inter.className}`}>
				<div
					className={styles.total}
					style={{
						fontSize: `${width / 6}%`,
					}}
				>
					{totalPoint}pt
				</div>
				<Button
					className={styles.shareBtn}
					onClick={() => {
						navigator.clipboard
							.writeText(`http://localhost:3000/userID/${getRandomString(16)}`)
							.then(
								function () {
									toaster.success('共有リンクがクリップボードにコピーされました！')
								},
								function (err) {
									toaster.warning('コピーに失敗しました')
								},
							)
					}}
				>
					Share
				</Button>
			</main>
		</>
	)
}
