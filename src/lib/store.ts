import { writable } from 'svelte/store'
import type { GameState } from './cards'

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
