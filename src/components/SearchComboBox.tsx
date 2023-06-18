import { Combobox } from 'evergreen-ui'
import { useRouter } from 'next/router'

export default function SearchComboBox({ users }: { users: string[] }) {
	const router = useRouter()

	const handleSelect = (userId: string) => {
		router.push(userId)
	}

	return (
		<Combobox
			openOnFocus
			items={users}
			onChange={selected => handleSelect(selected)}
			placeholder='userID'
		/>
	)
}
