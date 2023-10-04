<script lang="ts">
	import Hand from './Hand.svelte'
	import { config } from '$lib/config'
	import { gameState, name, game } from '$lib/store'
	import { CardNumbers, CardTypes, getImageUrl, sameCard, type Card } from '$lib/cards'
	const { CARD_WIDTH, CARD_HEIGHT } = config
	let index = $gameState.players.findIndex((player) => player.name === $name)
	let table: [Card | null, Card | null, Card | null] = [null, null, null]
	gameState.subscribe((value) => {
		table.forEach((card, i) => {
			if (!sameCard(card, value.table[i])) {
				table[i] = value.table[i]
			}
		})
	})
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex flex-1 relative bg-cambridge_blue-400 rounded-lg">
	<div class="absolute items-end flex gap-2 left-3 bottom-0">
		<div
			class="flex relative items-center gap-2 left-3 p-3 rounded-t-xl text-lg font-bold bg-delft_blue-400 text-eggshell-300 bottom-0"
		>
			<i class="fa fa-user" />
			{$name}
			{#if $gameState.turn === index}
				<i
					class="text-7xl fa-solid fa-arrow-down-long top-0 -translate-y-[120%] animate-pulse absolute text-burnt_sienna-400"
				/>
			{/if}
		</div>
		<Hand />
	</div>
	<div class="absolute items-start flex gap-2 left-3">
		<div
			class="relative flex items-center gap-2 left-3 p-3 rounded-b-xl text-lg font-bold bg-delft_blue-400 text-eggshell-300"
		>
			<i class="fa fa-user" />
			{$gameState.players[(index + 2) % 3].name}
			{#if $gameState.turn === (index + 2) % 3}
				<i
					class="text-7xl fa-solid fa-arrow-up-long bottom-0 translate-y-[120%] animate-pulse absolute text-burnt_sienna-400"
				/>
			{/if}
		</div>
	</div>
	<div class="absolute items-start flex gap-2 right-3">
		<div
			class="relative flex items-center gap-2 right-3 p-3 rounded-b-xl text-lg font-bold bg-delft_blue-400 text-eggshell-300"
		>
			<i class="fa fa-user" />
			{$gameState.players[(index + 1) % 3].name}
			{#if $gameState.turn === (index + 1) % 3}
				<i
					class="text-7xl fa-solid fa-arrow-up-long bottom-0 translate-y-[120%] animate-pulse absolute text-burnt_sienna-400"
				/>
			{/if}
		</div>
	</div>

	<!-- svelte-ignore a11y-missing-attribute -->
	<img
		class="absolute right-3 bottom-3"
		style={`
				height: ${CARD_HEIGHT}px;
				width: ${CARD_WIDTH}px;
			`}
		src={getImageUrl({
			fliped: true,
			type: $gameState.sing || CardTypes.ORO,
			number: CardNumbers.TWO
		})}
	/>

	<div
		class="absolute left-1/2 -translate-x-1/2 top-10 bg-cambridge_blue-600 w-[500px] h-[400px] rounded-lg"
	>
		<div class="relative h-full w-full">
			{#if table[(index + 2) % 3]}
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					class="card-left bg-red-900"
					style={`
							height: ${CARD_HEIGHT}px;
							width: ${CARD_WIDTH}px;
						`}
					src={getImageUrl(table[(index + 2) % 3])}
				/>
			{/if}
			{#if table[index]}
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					class="card-middle bg-red-900"
					style={`
							height: ${CARD_HEIGHT}px;
							width: ${CARD_WIDTH}px;
						`}
					src={getImageUrl(table[index])}
				/>
			{/if}
			{#if table[(index + 1) % 3]}
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					class="card-right bg-red-900"
					style={`
							height: ${CARD_HEIGHT}px;
							width: ${CARD_WIDTH}px;
						`}
					src={getImageUrl(table[(index + 1) % 3])}
				/>
			{/if}
		</div>
	</div>

	<style>
		@keyframes appear-middle {
			0% {
				opacity: 0;
				bottom: -150px;
				left: 0;
				transform: translateX(-50%) rotate(90deg);
			}

			100% {
				opacity: 1;
				bottom: -50px;
				left: 50%;
				transform: translateX(-50%) rotate(0deg);
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
</div>
