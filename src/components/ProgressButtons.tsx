import axios from 'axios'
import React, { useState } from 'react'
import { PointType, Progress as ProgressType } from '@/types/progress'
import { getApiOrigin } from '../../env'
import { FaGrinAlt,FaGrinSquint,FaGrinStars} from 'react-icons/fa';
import {TbNumber1,TbNumber3,TbNumber5} from 'react-icons/tb';
import { Button, IconButton, Pane, PlusIcon } from 'evergreen-ui'
import { IconContext } from 'react-icons'

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
			<Pane position="fixed" bottom="50px" right="50px">
				<IconButton icon={PlusIcon} onClick={toggle} height={60}/>
			</Pane>
			
			{hideButton && (
				<div>
					<Pane position="fixed" bottom="50px" right="200px">
						<Button height={60}  width={60} onClick={() => buttonPush('one')}>
							<Pane>
								<Pane position="fixed" bottom="50px" right="200px">
									<div><TbNumber1 size="13px" /></div>
								</Pane>
								<IconContext.Provider value={{size: '30px' }}>
									<div><FaGrinAlt/></div>
								</IconContext.Provider>
								
							</Pane>
						</Button>
					</Pane>
					<Pane position="fixed" bottom="140px" right="140px">
						<Button height={60} width={60} onClick={() => buttonPush('three')}>
							<Pane >
								<IconContext.Provider value={{size: '30px'}}>
									<div><FaGrinSquint/></div>
								</IconContext.Provider>
								<Pane position="fixed" bottom="140px" right="140px">
									<div><TbNumber3 size="13px"/></div>
								</Pane>
							</Pane>
						</Button>
					</Pane>
					<Pane position="fixed" bottom="200px" right="50px">
						<Button height={60} width={60} onClick={() => buttonPush('five')}>
							<Pane>
								<IconContext.Provider value={{size: '30px'}}>
									<div><FaGrinStars/></div>
								</IconContext.Provider>
								<Pane position="fixed" bottom="200px" right="50px">
									<div><TbNumber5 size="13px"/></div>
								</Pane>
							</Pane>
						</Button>
					</Pane>
				</div>
			)}
		</div>
	)
}
