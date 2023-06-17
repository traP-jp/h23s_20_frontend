import axios from 'axios'
import { Button, Pane, Dialog, TextInput, Radio } from 'evergreen-ui'
import { useState } from 'react'

import { PointType, Setting as SettingType } from '@/types/setting'

export default function Setting() {
	const [isShown, setIsShown] = useState(false)
	const [githubID, setGithubID] = useState('')
	const [atcoderID, setAtcoderID] = useState('')
	const [progressPoint, setProgressPoint] = useState<PointType>('one')
	const [githubPoint, setGithubPoint] = useState<PointType>('one')
	const [atcoderPoint, setAtcoderPoint] = useState<PointType>('one')

	const handleSubmit = async () => {
		const requestData: SettingType = {
			github_id: githubID,
			atcoder_id: atcoderID,
			progress_point_type: progressPoint,
			github_point_type: githubPoint,
			atcoder_point_type: atcoderPoint,
		}
		console.log(requestData)
		const res = await axios.put('http://localhost:8000/me/config', requestData)
	}
	return (
		<div>
			<Pane>
				<Dialog
					isShown={isShown}
					title='設定'
					intent='setting'
					onCloseComplete={() => handleSubmit()}
					confirmLabel='確定'
				>
					<div>
						<div
							style={{
								top: '110px',
								left: '382px',
								position: 'fixed',
								fontSize: '12px',
							}}
						>
							1<>　 　　</>3<>　 　　</>5
						</div>

						<div
							style={{
								top: '180px',
								left: '382px',
								position: 'fixed',
								fontSize: '12px',
							}}
						>
							1<>　 　　</>3<>　 　　</>5
						</div>

						<div
							style={{
								top: '270px',
								left: '382px',
								position: 'fixed',
								fontSize: '12px',
							}}
						>
							1<>　 　　</>3<>　 　　</>5
						</div>

						<div
							style={{
								top: '160px',
								left: '360px',
								position: 'fixed',
								fontSize: '9px',
								color: 'red',
							}}
						>
							progressチェンネルから取ってきます
						</div>

						<div style={{ lineHeight: 5 }}>
							<div>
								traQ ID : Apple
								<Pane
									aria-label='progress_group'
									role='progress_group'
									position='fixed'
									top='120px'
									right='70px'
									display='flex'
								>
									<Radio
										checked={progressPoint === 'one'}
										size={16}
										name='progress_group'
										label=''
										onChange={() => setProgressPoint('one')}
									/>
									<>　　</>
									<Radio
										checked={progressPoint === 'three'}
										size={16}
										name='progress_group'
										label=''
										onChange={() => setProgressPoint('three')}
									/>
									<>　　</>
									<Radio
										checked={progressPoint === 'five'}
										size={16}
										name='progress_group'
										label=''
										onChange={() => setProgressPoint('five')}
									/>
								</Pane>
							</div>

							<div>
								Github ID : <>　　</>
								<TextInput
									width='30%'
									height={20}
									onChange={(e: any) => setGithubID(e.target.value)}
									value={githubID}
								/>
								<Pane
									aria-label='github_group'
									role='github_group'
									position='fixed'
									top='200px'
									right='70px'
									display='flex'
								>
									<Radio
										checked={githubPoint === 'one'}
										size={16}
										name='github_group'
										label=''
										onChange={() => setGithubPoint('one')}
									/>
									<>　　</>
									<Radio
										checked={githubPoint === 'three'}
										size={16}
										name='github_group'
										label=''
										onChange={() => setGithubPoint('three')}
									/>
									<>　　</>
									<Radio
										checked={githubPoint === 'five'}
										size={16}
										name='github_group'
										label=''
										onChange={() => setGithubPoint('five')}
									/>
								</Pane>
							</div>

							<div>
								AtCorder ID : <>　</>
								<TextInput
									width='30%'
									height={20}
									onChange={(e: any) => setAtcoderID(e.target.value)}
									value={atcoderID}
								/>
								<Pane
									aria-label='atcoder_group'
									role='atcoder_group'
									position='fixed'
									top='280px'
									right='70px'
									display='flex'
								>
									<Radio
										checked={atcoderPoint === 'one'}
										size={16}
										name='atcoder_group'
										label=''
										onChange={() => setAtcoderPoint('one')}
									/>
									<>　　</>
									<Radio
										checked={atcoderPoint === 'three'}
										size={16}
										name='atcoder_group'
										label=''
										onChange={() => setAtcoderPoint('three')}
									/>
									<>　　</>
									<Radio
										checked={atcoderPoint === 'five'}
										size={16}
										name='atcoder_group'
										label=''
										onChange={() => setAtcoderPoint('five')}
									/>
								</Pane>
							</div>
						</div>
					</div>
				</Dialog>
			</Pane>
			<Pane position='fixed' top='10px' right='200px'>
				<Button onClick={() => setIsShown(true)}>設定を開く</Button>
			</Pane>
		</div>
	)
}
