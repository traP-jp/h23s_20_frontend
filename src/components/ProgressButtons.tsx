import axios from 'axios'
import { Button, IconButton, Pane, PlusIcon } from 'evergreen-ui'
import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FaGrinAlt, FaGrinSquint, FaGrinStars } from 'react-icons/fa'
import { TbNumber1, TbNumber3, TbNumber5 } from 'react-icons/tb'

import { PointType, Progress as ProgressType } from '@/types/progress'

import { getApiOrigin } from '../../env'

import styles from './ProgressButtons.module.css'

export default function ProgressButtons({ onClick }: { onClick: (tyope: PointType) => void }) {
	const buttonPush = async (type: PointType) => {
		const requestData: ProgressType = {
			point_type: type,
		}
		const res = await axios.post(`${getApiOrigin()}/points`, requestData, { withCredentials: true })
		onClick(type)
	}
	const [TranslateButton, setTranslateButton] = useState(false)

	const translate = () => {
		setTranslateButton(!TranslateButton)
	}

	return (
		<div>
			<Pane position='fixed' bottom='50px' right='50px'>
				<IconButton icon={PlusIcon} onClick={translate} height={60} />
			</Pane>

			{TranslateButton && (
				<div>
					<div className={styles.button1}>
						<Button height={60} width={60} onClick={() => buttonPush('one')}>
							<Pane>
								<IconContext.Provider value={{ size: '30px' }}>
									<div>
										<FaGrinAlt />
									</div>
								</IconContext.Provider>
							</Pane>
						</Button>
					</div>
					<div className={styles.number1}>
						<Pane>
							<div>
								<TbNumber1 size='13px' />
							</div>
						</Pane>
					</div>
					<div className={styles.button3}>
						<Button height={60} width={60} onClick={() => buttonPush('three')}>
							<Pane>
								<IconContext.Provider value={{ size: '30px' }}>
									<div>
										<FaGrinSquint />
									</div>
								</IconContext.Provider>
							</Pane>
						</Button>
					</div>
					<div className={styles.number3}>
						<Pane>
							<div>
								<TbNumber3 size='13px' />
							</div>
						</Pane>
					</div>

					<div className={styles.button5}>
						<Button height={60} width={60} onClick={() => buttonPush('five')}>
							<Pane>
								<IconContext.Provider value={{ size: '30px' }}>
									<div>
										<FaGrinStars />
									</div>
								</IconContext.Provider>
							</Pane>
						</Button>
					</div>
					<div className={styles.number5}>
						<Pane>
							<div>
								<TbNumber5 size='13px' />
							</div>
						</Pane>
					</div>
				</div>
			)}
		</div>
	)
}
