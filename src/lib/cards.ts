import { cardImages } from './cardImages'

export interface GameState {
	table: [Card, Card, Card]
	hand: Card[]
	stack: Card[]
	sings: CardTypes[]
	turn: number
	waiting: boolean
	fail: CardTypes | null
	players: {
		name: string
		sings: CardTypes[]
		stack: number
		points: number
	}[]
	firstCard?: Card
	game: string
	lastWinner: number
	status: string
	name: string
	index: number
}

export enum CardTypes {
	ORO = 'ORO',
	COPA = 'COPA',
	ESPADA = 'ESPADA',
	BASTO = 'BASTO'
}

export enum CardNumbers {
	ONE = 'ONE',
	TWO = 'TWO',
	THREE = 'THREE',
	FOUR = 'FOUR',
	FIVE = 'FIVE',
	SIX = 'SIX',
	SEVEN = 'SEVEN',
	EIGHT = 'EIGHT',
	NINE = 'NINE',
	TEN = 'TEN'
}

const cardRows: { [key in CardTypes]: number } = {
	[CardTypes.ORO]: 1,
	[CardTypes.COPA]: 2,
	[CardTypes.ESPADA]: 3,
	[CardTypes.BASTO]: 4
}

const cardColumn: { [key in CardNumbers]: number } = {
	[CardNumbers.ONE]: 1,
	[CardNumbers.TWO]: 2,
	[CardNumbers.THREE]: 3,
	[CardNumbers.FOUR]: 4,
	[CardNumbers.FIVE]: 5,
	[CardNumbers.SIX]: 6,
	[CardNumbers.SEVEN]: 7,
	[CardNumbers.EIGHT]: 10,
	[CardNumbers.NINE]: 11,
	[CardNumbers.TEN]: 12
}

const cardValues: { [key in CardNumbers]: number } = {
	[CardNumbers.ONE]: 11,
	[CardNumbers.TWO]: -5,
	[CardNumbers.THREE]: 10,
	[CardNumbers.FOUR]: -4,
	[CardNumbers.FIVE]: -3,
	[CardNumbers.SIX]: -3,
	[CardNumbers.SEVEN]: -1,
	[CardNumbers.EIGHT]: 2,
	[CardNumbers.NINE]: 3,
	[CardNumbers.TEN]: 4
}

export interface Card {
	type: CardTypes
	number: CardNumbers
	playable?: boolean
}

export const getImageUrl = (card: Card | null, debug?: boolean) => {
	debug && console.log(card?.number, card?.type)
	if (!card) return ''
	return cardImages[card.type][card.number]
}

export const orderedHand = (hand: Card[]) =>
	hand.sort((a, b) => {
		if (a.type === b.type) {
			return cardValues[a.number] - cardValues[b.number]
		}
		return cardRows[a.type] - cardRows[b.type]
	})

export const sameCard = (a: Card | null, b: Card | null) =>
	a?.type === b?.type && a?.number === b?.number
