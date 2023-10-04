export interface GameState {
	table: [Card, Card, Card]
	hand: Card[]
	stack: Card[]
	sings: CardTypes[]
	turn: number
	waiting: boolean
	sing: CardTypes | null
	players: { name: string; sings: CardTypes[] }[]
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

export interface Card {
	type: CardTypes
	number: CardNumbers
	fliped: boolean
}

export const getImageUrl = (card: Card | null) =>
	card ? `/cards/row-${cardRows[card.type]}-column-${cardColumn[card.number]}.png` : ''

export const orderedHand = (hand: Card[]) =>
	hand.sort((a, b) => {
		if (a.type === b.type) {
			return cardColumn[a.number] - cardColumn[b.number]
		}
		return cardRows[a.type] - cardRows[b.type]
	})

export const sameCard = (a: Card | null, b: Card | null) =>
	a?.type === b?.type && a?.number === b?.number
