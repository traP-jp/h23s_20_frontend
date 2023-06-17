import { RestHandler } from 'msw'

import { sampleHanlders } from '@/mocks/handlers/sample'
import { settingHandlers } from './setting'
import { usersHandlers } from './user'
import { evaluationHandlers } from './evaluation'

export function getHandlersArray(handlers: Record<string, RestHandler>): RestHandler[] {
	return Object.values(handlers)
}

export function handlers(apiOrigin: string) {
	return [getHandlersArray(sampleHanlders(apiOrigin)),
	getHandlersArray(settingHandlers(apiOrigin)),
	getHandlersArray(usersHandlers(apiOrigin)),
	getHandlersArray(evaluationHandlers(apiOrigin)),
	].flat()
}
