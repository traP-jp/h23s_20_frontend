import { RestHandler } from 'msw'

import { evaluationHandlers } from './evaluation'
import { rankingHanlders } from './ranking'
import { settingHandlers } from './setting'
import { treeHanlders } from './tree'
import { usersHandlers } from './user'

export function getHandlersArray(handlers: Record<string, RestHandler>): RestHandler[] {
	return Object.values(handlers)
}

export function handlers(apiOrigin: string) {
	return [
		getHandlersArray(settingHandlers(apiOrigin)),
		getHandlersArray(usersHandlers(apiOrigin)),
		getHandlersArray(evaluationHandlers(apiOrigin)),
		getHandlersArray(treeHanlders(apiOrigin)),
		getHandlersArray(rankingHanlders(apiOrigin)),
	].flat()
}
