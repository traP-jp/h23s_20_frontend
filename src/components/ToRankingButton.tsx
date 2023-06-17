import { Button } from 'evergreen-ui'
import Link from 'next/link'

export default function ToRankingButton() {
	return (
		<Button intent='ranking'>
			<Link href='/ranking'>ランキングへ</Link>
		</Button>
	)
}
