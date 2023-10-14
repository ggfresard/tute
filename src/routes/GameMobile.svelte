<script lang="ts">
	import Hand from './Hand.svelte'
	import { config } from '$lib/config'
	import { gameState, name, players } from '$lib/store'
	import { CardNumbers, CardTypes, getImageUrl, sameCard, type Card } from '$lib/cards'
	import PlayedCard from './PlayedCard.svelte'
	import NameTag from './NameTag.svelte'
	import Results from './Results.svelte'
	import FinalResults from './FinalResults.svelte'
	const { CARD_WIDTH, CARD_HEIGHT, BOARD_Y_OFFSET } = config
	$: index = $gameState.players.findIndex((player) => player.name === $name)
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex flex-1 relative bg-cambridge_blue-400 rounded-lg">
	<FinalResults />
	<Results />
	{#if $gameState.status !== 'finished'}
		{#each $gameState.players as player}
			<NameTag {player}>
				{#if player.name === $name}
					<Hand />
				{/if}
			</NameTag>
		{/each}
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="absolute right-3 top-1/2 -translate-y-1/2 z-20"
			style={`
				height: ${CARD_HEIGHT}px;
				width: ${CARD_WIDTH}px;
			`}
			src={getImageUrl({
				type: $gameState.fail || CardTypes.ORO,
				number: CardNumbers.TWO
			})}
		/>

		<div
			class="absolute left-1/2 -translate-x-1/2 top-1/2 z-30 bg-cambridge_blue-600 w-[500px] h-[400px] rounded-lg"
			style={`transform: translateX(-50%) translateY(-50%) translateY(-${BOARD_Y_OFFSET}px); opacity: 0.5;`}
		/>
		{#each $gameState.table as card, i}
			<PlayedCard {card} {i} />
		{/each}
	{/if}
</div>
