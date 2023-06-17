import { setupWorker } from 'msw'
import { setupServer } from 'msw/node'

import { handlers } from './handlers'

export const initMock = () => {
	if (process.env.NODE_ENV === 'development') {
		if (typeof window !== 'undefined') {
			const worker = setupWorker(...handlers('http://localhost:3000'))
			worker.start()
		} else {
			const server = setupServer(...handlers('http://localhost:3000'))
			server.listen()
		}
	}
}
