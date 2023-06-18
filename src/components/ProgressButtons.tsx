import axios from 'axios'
import React, { useState } from 'react'

import { PointType, Progress as ProgressType } from '@/types/progress'

import { getApiOrigin } from '../../env'

import styles from './ProgressButtons.module.css'

export default function ProgressButtons() {
	const [hideButton, setHideButton] = useState(false)

	const buttonPush = async (type: PointType) => {
		const requestData: ProgressType = {
			point_type: type,
		}
		const res = await axios.put(`${getApiOrigin()}/points`, requestData)
	}
	const toggle = () => {
		setHideButton(!hideButton)
	}

	return (
		<div>
			<button className={styles.plusbutton} onClick={toggle}>
				+
			</button>
			{hideButton && (
				<div>
					<button className={styles.button1} onClick={() => buttonPush('one')}>
						👍
					</button>
					<button className={styles.button2} onClick={() => buttonPush('three')}>
						👍
					</button>
					<button className={styles.button3} onClick={() => buttonPush('five')}>
						👍
					</button>
				</div>
			)}
		</div>
	)
}
