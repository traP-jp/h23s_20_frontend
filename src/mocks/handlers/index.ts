import { RestHandler } from 'msw'

import { sampleHanlders } from '@/mocks/handlers/sample'
import { treeHanlders } from '@/mocks/handlers/tree'

export function getHandlersArray(handlers: Record<string, RestHandler>): RestHandler[] {
	return Object.values(handlers)
}

export function handlers(apiOrigin: string) {
	return [
		getHandlersArray(sampleHanlders(apiOrigin)),
		getHandlersArray(treeHanlders(apiOrigin)),
	].flat()
}
