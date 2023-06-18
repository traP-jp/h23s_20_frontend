import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Tree from '@/components/Tree'
import styles from '@/styles/OtherTree.module.css'
import { Tree as TreeType } from '@/types/tree'

export default function UserTree() {
	const [trees, setTrees] = useState<TreeType[]>([])
	const router = useRouter()
	const userId = router.query.id as string

	useEffect(() => {
		;(async () => {
			const treeRes = await axios.get<TreeType[]>(`http://localhost:8000/${userId}/tree`)
			setTrees(treeRes.data)
		})()
	}, [])

	return (
		<div className={styles.tree}>
			<Tree trees={trees} />
		</div>
	)
}
