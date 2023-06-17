import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
	runtime: 'edge',
}

export default async function handler(request: NextRequest) {
	const { pathname } = request.nextUrl
	const userId = pathname.split('/').at(-1)
	if (!userId) {
		return new ImageResponse(<>Visit with &quot;?username=vercel&quot;</>, {
			width: 1200,
			height: 630,
		})
	}

	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					fontSize: 60,
					color: 'black',
					background: '#f6f6f6',
					width: '100%',
					height: '100%',
					paddingTop: 50,
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<img width='256' height='256' src={`https://q.trap.jp/api/v3/public/icon/${userId}`} />
				<p>hello, I am a yonger sister of the OGP.</p>
			</div>
		),
		{
			width: 1200,
			height: 630,
		},
	)
}
