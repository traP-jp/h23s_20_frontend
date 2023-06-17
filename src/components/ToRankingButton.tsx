import { Button, CrownIcon } from 'evergreen-ui'
import Link from 'next/link'

export default function RankingButton() {
	return (
		<Link href='/ranking'>
			<Button intent='ranking'>
				<CrownIcon />
			</Button>
		</Link>
	)
}
