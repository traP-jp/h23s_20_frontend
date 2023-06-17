import { initMock } from '@/mocks/main'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

initMock()

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
