<script lang="ts">
	import Hand from './Hand.svelte'
	import { config } from '$lib/config'
	import { gameState, name } from '$lib/store'
	import { CardNumbers, CardTypes, getImageUrl, sameCard, type Card } from '$lib/cards'
	import PlayedCard from './PlayedCard.svelte'
	import NameTag from './NameTag.svelte'
	import Results from './Results.svelte'
	import { mod } from '$lib'
	import FinalResults from './FinalResults.svelte'
	const { CARD_WIDTH, CARD_HEIGHT } = config
	$: index = $gameState.players.findIndex((player) => player.name === $name)
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex flex-1 relative bg-cambridge_blue-400 rounded-lg">
	<FinalResults />
	<Results />
	{#if $gameState.status !== 'finished'}
		<NameTag player={$gameState.players[index]} position="middle">
			<Hand />
		</NameTag>
		<NameTag player={$gameState.players[mod(index + 2, 3)]} position="left" />
		<NameTag player={$gameState.players[mod(index + 1, 3)]} position="right" />

		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			class="absolute right-3 bottom-3"
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
			class="absolute left-1/2 -translate-x-1/2 top-10 bg-cambridge_blue-600 w-[500px] h-[400px] rounded-lg"
		>
			<div class="relative h-full w-full">
				{#each $gameState.table as card, i}
					<PlayedCard {card} {i} />
				{/each}
			</div>
		</div>
	{/if}
</div>
