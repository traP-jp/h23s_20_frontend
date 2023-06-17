import axios from 'axios'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { useGetWindowSize } from '@/hooks/useGetWindowSize'
import { Ranking as RankingType } from '@/types/ranking'

import styles from '@/styles/Ranking.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Ranking() {
	const { height, width } = useGetWindowSize()

	const top = [28, 17, 31, 12, 68, 74, 68, 66]
	const left = [18, 42, 63.5, 84.5, 17, 33, 66, 90]

	const [ranking, setRanking] = useState<RankingType[]>([])

	useEffect(() => {
		const fetch = async () => {
			const res = await axios.get<RankingType[]>('http://localhost:8000/ranking')
			setRanking(res.data)
		}
		fetch()
	}, [])

	return (
		<>
			<main className={`${styles.main} ${inter.className}`}>
				<img
					className={styles.background}
					src='/background.png'
					alt='background tree'
					height={height}
					width={width}
				/>
				{ranking.map((item, index) => (
					<div
						className={styles.ranking}
						style={{
							top: `${top[index]}%`,
							left: `${left[index]}%`,
							fontSize: `${width / 6}%`,
						}}
						id={'rank' + (index + 1)}
						key={item.user_id}
					>
						<div className='img'>
							<Image
								className={styles.rankImg}
								src={'/rank' + (index + 1) + '.png'}
								alt={'rank ' + (index + 1)}
								height={((width / 20) * 96) / 110}
								width={width / 20}
							/>
						</div>
						<div className='id'>{item.user_id}</div>
						<div className='point'>{item.points}pt</div>
					</div>
				))}

				<Link className={styles.btn} href='./'>
					<Image
						className={styles.btmImg}
						src='/home_back.png'
						alt='homeBtn'
						height={height / 6 > ((width / 6) * 357) / 551 ? ((width / 6) * 357) / 551 : height / 6}
						width={height / 6 > ((width / 6) * 357) / 551 ? width / 6 : ((height / 6) * 551) / 357}
					/>
				</Link>
			</main>
		</>
	)
}
