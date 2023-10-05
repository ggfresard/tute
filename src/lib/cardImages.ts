import oneOne from '$lib/assets/cards/row-1-column-1.png'
import oneTwo from '$lib/assets/cards/row-1-column-2.png'
import oneThree from '$lib/assets/cards/row-1-column-3.png'
import oneFour from '$lib/assets/cards/row-1-column-4.png'
import oneFive from '$lib/assets/cards/row-1-column-5.png'
import oneSix from '$lib/assets/cards/row-1-column-6.png'
import oneSeven from '$lib/assets/cards/row-1-column-7.png'
import oneEight from '$lib/assets/cards/row-1-column-10.png'
import oneNine from '$lib/assets/cards/row-1-column-11.png'
import oneTen from '$lib/assets/cards/row-1-column-12.png'
import twoOne from '$lib/assets/cards/row-2-column-1.png'
import twoTwo from '$lib/assets/cards/row-2-column-2.png'
import twoThree from '$lib/assets/cards/row-2-column-3.png'
import twoFour from '$lib/assets/cards/row-2-column-4.png'
import twoFive from '$lib/assets/cards/row-2-column-5.png'
import twoSix from '$lib/assets/cards/row-2-column-6.png'
import twoSeven from '$lib/assets/cards/row-2-column-7.png'
import twoEight from '$lib/assets/cards/row-2-column-10.png'
import twoNine from '$lib/assets/cards/row-2-column-11.png'
import twoTen from '$lib/assets/cards/row-2-column-12.png'
import threeOne from '$lib/assets/cards/row-3-column-1.png'
import threeTwo from '$lib/assets/cards/row-3-column-2.png'
import threeThree from '$lib/assets/cards/row-3-column-3.png'
import threeFour from '$lib/assets/cards/row-3-column-4.png'
import threeFive from '$lib/assets/cards/row-3-column-5.png'
import threeSix from '$lib/assets/cards/row-3-column-6.png'
import threeSeven from '$lib/assets/cards/row-3-column-7.png'
import threeEight from '$lib/assets/cards/row-3-column-10.png'
import threeNine from '$lib/assets/cards/row-3-column-11.png'
import threeTen from '$lib/assets/cards/row-3-column-12.png'
import fourOne from '$lib/assets/cards/row-4-column-1.png'
import fourTwo from '$lib/assets/cards/row-4-column-2.png'
import fourThree from '$lib/assets/cards/row-4-column-3.png'
import fourFour from '$lib/assets/cards/row-4-column-4.png'
import fourFive from '$lib/assets/cards/row-4-column-5.png'
import fourSix from '$lib/assets/cards/row-4-column-6.png'
import fourSeven from '$lib/assets/cards/row-4-column-7.png'
import fourEight from '$lib/assets/cards/row-4-column-10.png'
import fourNine from '$lib/assets/cards/row-4-column-11.png'
import fourTen from '$lib/assets/cards/row-4-column-12.png'
import { CardNumbers, CardTypes } from './cards'

export const cardImages = {
	[CardTypes.ORO]: {
		[CardNumbers.ONE]: oneOne,
		[CardNumbers.TWO]: oneTwo,
		[CardNumbers.THREE]: oneThree,
		[CardNumbers.FOUR]: oneFour,
		[CardNumbers.FIVE]: oneFive,
		[CardNumbers.SIX]: oneSix,
		[CardNumbers.SEVEN]: oneSeven,
		[CardNumbers.EIGHT]: oneEight,
		[CardNumbers.NINE]: oneNine,
		[CardNumbers.TEN]: oneTen
	},
	[CardTypes.COPA]: {
		[CardNumbers.ONE]: twoOne,
		[CardNumbers.TWO]: twoTwo,
		[CardNumbers.THREE]: twoThree,
		[CardNumbers.FOUR]: twoFour,
		[CardNumbers.FIVE]: twoFive,
		[CardNumbers.SIX]: twoSix,
		[CardNumbers.SEVEN]: twoSeven,
		[CardNumbers.EIGHT]: twoEight,
		[CardNumbers.NINE]: twoNine,
		[CardNumbers.TEN]: twoTen
	},
	[CardTypes.ESPADA]: {
		[CardNumbers.ONE]: threeOne,
		[CardNumbers.TWO]: threeTwo,
		[CardNumbers.THREE]: threeThree,
		[CardNumbers.FOUR]: threeFour,
		[CardNumbers.FIVE]: threeFive,
		[CardNumbers.SIX]: threeSix,
		[CardNumbers.SEVEN]: threeSeven,
		[CardNumbers.EIGHT]: threeEight,
		[CardNumbers.NINE]: threeNine,
		[CardNumbers.TEN]: threeTen
	},
	[CardTypes.BASTO]: {
		[CardNumbers.ONE]: fourOne,
		[CardNumbers.TWO]: fourTwo,
		[CardNumbers.THREE]: fourThree,
		[CardNumbers.FOUR]: fourFour,
		[CardNumbers.FIVE]: fourFive,
		[CardNumbers.SIX]: fourSix,
		[CardNumbers.SEVEN]: fourSeven,
		[CardNumbers.EIGHT]: fourEight,
		[CardNumbers.NINE]: fourNine,
		[CardNumbers.TEN]: fourTen
	}
}
