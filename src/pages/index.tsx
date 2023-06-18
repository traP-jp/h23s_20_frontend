import axios from 'axios'
import { Button, toaster, SettingsIcon, ShareIcon } from 'evergreen-ui'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

import ProgressButtons from '@/components/ProgressButtons'
import SearchComboBox from '@/components/SearchComboBox'
import SettingModal from '@/components/SettingModal'
import ToRankingButton from '@/components/ToRankingButton'
import Tree from '@/components/Tree'
import { useGetWindowSize } from '@/hooks/useGetWindowSize'
import { getRandomArbitrary, getRandomColor } from '@/mocks/handlers/utils'
import { meState } from '@/stores/user'
import styles from '@/styles/Home.module.css'
import { PointType } from '@/types/progress'
import { Tree as TreeType } from '@/types/tree'
import { User } from '@/types/user'

import { getApiOrigin } from '../../env'

export const getRandomString = (n: number): string => {
	const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

	return Array.from(crypto.getRandomValues(new Uint32Array(n)))
		.map(v => S[v % S.length])
		.join('')
}

export default function Home() {
	const [isShown, setIsShown] = useState(false)
	const [myTrees, setMyTrees] = useState<TreeType[]>([])
	const [users, setUsers] = useState<User[]>([])
	const { width, height } = useGetWindowSize()
	const me = useRecoilValue(meState)
	const meId = useRecoilValue(meState).traq_id
	const totalPoint = myTrees.reduce((a, b) => a + b.point, 0)

	const userIds = users.map(user => {
		return user.traq_id
	})

	const handleCopy = () => {
		navigator.clipboard
			.writeText(`https://h23s-20-frontend.vercel.app/${meId}?id=${getRandomString(16)}`)
			.then(
				// todo:host
				function () {
					toaster.success('共有リンクがクリップボードにコピーされました！')
				},
				function (err) {
					toaster.warning('コピーに失敗しました')
				},
			)
	}

	const handleAddLeaves = (type: PointType) => {
		const point = type === 'one' ? 1 : type === 'three' ? 3 : 5
		const newTree: TreeType[] = [
			...myTrees.slice(0, myTrees.length - 1),
			{
				...myTrees[myTrees.length - 1],
				leaves: myTrees[myTrees.length - 1].leaves.concat(
					Array(point)
						.fill(null)
						.map(() => ({
							x: getRandomArbitrary(-200, 200),
							y: getRandomArbitrary(200, 800),
							color: getRandomColor(),
							size: 'middle',
						})),
				),
			},
		]
		setMyTrees(newTree)
	}

	useEffect(() => {
		if (!meId) return
		;(async () => {
			const usersRes = await axios.get<User[]>(`${getApiOrigin()}/users`, { withCredentials: true })
			const treeRes = await axios.get<TreeType[]>(`${getApiOrigin()}/${meId}/trees`, {
				withCredentials: true,
			})
			// todo: Promise.all使うとバグる
			setUsers(usersRes.data)
			setMyTrees(treeRes.data)
		})()
	}, [meId])

	const handleClick = () => {
		const canvas = document.getElementsByTagName('canvas')[0]
		if (!canvas) return
		const png = canvas.toDataURL()
		const data = new FormData()
		data.append(`treePng`, png)
		axios.post(`${getApiOrigin()}/image`, data)
	}

	return (
		<div>
			<div className={styles.topTools}>
				<div
					className={styles.totalPoint}
					style={{
						fontSize: `${width / 6}%`,
					}}
				>
					{totalPoint}pt
				</div>
				<div className={styles.tools}>
					<div className={styles.toolButtons}>
						<ToRankingButton />
						<Button onClick={() => setIsShown(true)}>
							<SettingsIcon />
						</Button>
						<Button onClick={handleCopy}>
							<ShareIcon />
						</Button>
					</div>
					<SearchComboBox users={userIds} />
					<SettingModal isShown={isShown} setIsShown={setIsShown} />
				</div>
			</div>
			<div className={styles.tree}>
				<Tree trees={myTrees} />
			</div>
			<ProgressButtons onClick={handleAddLeaves} />
		</div>
	)
}
