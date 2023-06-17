import { RestHandler } from 'msw'

import { sampleHanlders } from '@/mocks/handlers/sample'
import { treeHanlders } from '@/mocks/handlers/tree'

import { progressHandlers } from './progress'
import { rankingHanlders } from './ranking'
import { settingHandlers } from './setting'
import { usersHandlers } from './user'

export function getHandlersArray(handlers: Record<string, RestHandler>): RestHandler[] {
	return Object.values(handlers)
}

export function handlers(apiOrigin: string) {
	return [
		getHandlersArray(sampleHanlders(apiOrigin)),
		getHandlersArray(treeHanlders(apiOrigin)),
		getHandlersArray(settingHandlers(apiOrigin)),
		getHandlersArray(usersHandlers(apiOrigin)),
		getHandlersArray(progressHandlers(apiOrigin)),
		getHandlersArray(rankingHanlders(apiOrigin)),
	].flat()
}
