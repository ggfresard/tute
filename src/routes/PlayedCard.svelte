<script lang="ts">
	import { getImageUrl, type Card, sameCard, CardTypes, CardNumbers } from '$lib/cards'
	import { Positions, config, layout, positionValues } from '$lib/config'
	import type { Range } from '$lib'
	import { gameState } from '$lib/store'
	import { mod } from '$lib'
	import { fadeTowards } from '$lib/transitions'
	const { CARD_HEIGHT, CARD_WIDTH, BOARD_Y_OFFSET, BOARD_X_OFFSET } = config

	export let card: Card
	let el = {}
	export let i: number
	const offset = 150

	$: index = mod(i - $gameState.index, $gameState.players.length) as Range<0, 5>
	$: winnerIndex = mod($gameState.lastWinner - $gameState.index, $gameState.players.length)

	$: total = $gameState.players.length

	$: angle = ((-2 * index + (total === 3 ? 0 : 1)) * 180) / total
	$: x =
		-offset * Math.sin((angle / 180) * Math.PI) -
		0.5 * CARD_WIDTH +
		(Math.abs(angle % 180) === 0
			? 0
			: -Math.sign(Math.sin((angle / 180) * Math.PI)) * BOARD_X_OFFSET)

	$: y = offset * Math.cos((angle / 180) * Math.PI) - 0.5 * CARD_HEIGHT - BOARD_Y_OFFSET
	$: outTowards =
		positionValues[layout[$gameState.players.length as Range<3, 5>][winnerIndex] as Positions]
	$: inTowards =
		positionValues[layout[$gameState.players.length as Range<3, 5>][index] as Positions]
</script>

<!-- svelte-ignore a11y-missing-attribute -->
{#key card ? card.number + card.type : index}
	<img
		bind:this={el}
		out:fadeTowards={outTowards}
		in:fadeTowards={inTowards}
		style={`
	height: ${CARD_HEIGHT}px;
	width: ${CARD_WIDTH}px;
	opacity: ${card ? 1 : 0};
	transform: translate(${x}px, ${y}px) rotate(${angle}deg);
	left: 50%;
	top: 50%;
	position: absolute;
	z-index: ${40};
	`}
		src={getImageUrl(card)}
	/>
{/key}
