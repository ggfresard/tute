<script lang="ts">
	import { getImageUrl, type Card } from '$lib/cards'
	import { config } from '$lib/config'
	import { gameState, name } from '$lib/store'
	import { mod } from '$lib'
	import { fly } from 'svelte/transition'
	const { CARD_HEIGHT, CARD_WIDTH } = config

	export let i: number
	let el = {}

	$: index = $gameState.index

	$: position = {
		[0]: 'middle',
		[1]: 'right',
		[2]: 'left'
	}[mod(i - $gameState.index, 3)]
	$: animation =
		{
			left: 'card-left',
			middle: 'card-middle',
			right: 'card-right'
		}[position] ?? 'card-middle'

	export let card: Card

	$: getOutAnimationParams = () => {
		if (mod($gameState.lastWinner - index, 3) === 0) {
			if (position === 'left') {
				return { x: 400, y: 400, duration: 1000 }
			} else if (position === 'right') {
				return { x: -400, y: -400, duration: 1000 }
			} else {
				return { x: -400, y: 200, duration: 1000 }
			}
		}
		if (mod($gameState.lastWinner - index, 3) === 1) {
			if (position === 'left') {
				return { x: -200, y: -800, duration: 1000 }
			} else if (position === 'right') {
				return { x: 200, y: 400, duration: 1000 }
			} else {
				return { x: 400, y: -400, duration: 1000 }
			}
		} else {
			if (position === 'left') {
				return { x: -200, y: 400, duration: 1000 }
			} else if (position === 'right') {
				return { x: 200, y: -800, duration: 1000 }
			} else {
				return { x: -400, y: -400, duration: 1000 }
			}
		}
	}
</script>

<!-- svelte-ignore a11y-missing-attribute -->
{#key card ? card.number + card.type : i}
	<img
		bind:this={el}
		out:fly={getOutAnimationParams()}
		class={`${animation} `}
		style={`
	height: ${CARD_HEIGHT}px;
	width: ${CARD_WIDTH}px;
	opacity: ${card ? 1 : 0};
	`}
		src={getImageUrl(card, true)}
	/>
{/key}

<style>
	@keyframes appear-middle {
		0% {
			left: 0;
			opacity: 0;
			transform: translateX(-50%) rotate(90deg);
			bottom: -200px;
		}

		100% {
			left: 50%;
			opacity: 1;
			transform: translateX(-50%) rotate(0deg);
			bottom: -50px;
		}
	}

	.card-middle {
		border-radius: 10px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%) rotate(0deg);
		animation-name: appear-middle;
		animation-duration: 0.5s;
		bottom: -50px;
	}

	@keyframes appear-left {
		0% {
			left: -200px;
			opacity: 0;
			transform: rotate(0deg);
			top: 0%;
		}

		100% {
			left: 0px;
			opacity: 1;
			transform: translateY(-50%) rotate(90deg);
			top: 50%;
		}
	}

	.card-left {
		border-radius: 10px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%) rotate(90deg);
		animation-name: appear-left;
		animation-duration: 0.5s;
	}

	@keyframes appear-right {
		0% {
			right: -200px;
			opacity: 0;
			transform: rotate(0deg);
			top: 0%;
		}

		100% {
			right: 0px;
			opacity: 1;
			transform: translateY(-50%) rotate(-90deg);
			top: 50%;
		}
	}

	.card-right {
		border-radius: 10px;
		position: absolute;
		top: 50%;
		right: 0px;
		transform: translateY(-50%) rotate(-90deg);
		animation-name: appear-right;
		animation-duration: 0.5s;
	}
</style>
