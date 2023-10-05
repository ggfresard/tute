import { writable } from 'svelte/store'
import type { Card, CardNumbers, CardTypes, GameState } from './cards'

export enum Paths {
	None = '',
	Game = 'game',
	Waiting = 'waiting',
	Create = 'create',
	Join = 'join'
}

export const name = writable('')
export const players = writable<string[]>([])
export const game = writable('')
export const path = writable<Paths>(Paths.None)
export const availableGames = writable<
	{
		name: string
		players: number
	}[]
>([])
export const gameState = writable<GameState>()
export const question = writable<
	| {
			question: string
			options: {
				[key: string]: never
			}
			response: {
				message: string
				params: {
					[key: string]: never
				}
				responseKey: string
			}
	  }
	| undefined
>()

export const results = writable<
	| {
			type: 'tute'
			player: string
			tuteType: CardNumbers.TEN | CardNumbers.NINE
	  }
	| {
			type: 'capote'
			player: string
			positive: boolean
	  }
	| {
			type: 'normal'
			loosers: string[]
			players: {
				name: string
				points: number
				stack: Card[]
				sings: CardTypes[]
				total: number
			}[]
			last: number
	  }
	| undefined
>()
