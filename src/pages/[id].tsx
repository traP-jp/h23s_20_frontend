import axios from 'axios'
import { Button, HomeIcon } from 'evergreen-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Tree from '@/components/Tree'
import styles from '@/styles/OtherTree.module.css'
import { Tree as TreeType } from '@/types/tree'

import { getApiOrigin } from '../../env'

export default function UserTree() {
	const [trees, setTrees] = useState<TreeType[]>([])
	const router = useRouter()
	const [userId, setUserId] = useState<string>('')

	useEffect(() => {
		if (router.isReady) {
			setUserId(router.query.id as string)
		}
	}, [router.isReady, router.query.id])

	useEffect(() => {
		if (!userId) return
		;(async () => {
			const treeRes = await axios.get<TreeType[]>(`${getApiOrigin()}/${userId}/tree`)
			setTrees(treeRes.data)
		})()
	}, [])

	return (
		<div className={styles.container}>
			<Link href='/'>
				<Button>
					<HomeIcon />
				</Button>
			</Link>
			<div className={styles.tree}>
				<Tree trees={trees} />
			</div>
		</div>
	)
}
