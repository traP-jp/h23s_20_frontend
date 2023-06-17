import { RestHandler } from 'msw'

import { sampleHanlders } from '@/mocks/handlers/sample'

import { treeHanlders } from './tree'
import { rankingHanlders } from './ranking'

export function getHandlersArray(handlers: Record<string, RestHandler>): RestHandler[] {
	return Object.values(handlers)
}

export function handlers(apiOrigin: string) {
	return [
		getHandlersArray(sampleHanlders(apiOrigin)),
		getHandlersArray(treeHanlders(apiOrigin)),
		getHandlersArray(rankingHanlders(apiOrigin)),
	].flat()
}
