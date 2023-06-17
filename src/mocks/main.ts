import { setupWorker } from 'msw'
import { setupServer } from 'msw/node'

import { handlers } from './handlers'

export const initMock = () => {
	if (process.env.NODE_ENV === 'development') {
		if (typeof window !== 'undefined') {
			const worker = setupWorker(...handlers('https://mehm8128-example.com'))
			worker.start()
		} else {
			const server = setupServer(...handlers('https://mehm8128-example.com'))
			server.listen()
		}
	}
}
