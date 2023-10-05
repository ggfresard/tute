<script lang="ts">
	import { getImageUrl, orderedHand, type Card } from '$lib/cards'
	import { config } from '$lib/config'
	import { io } from '$lib/socket'
	import { game, gameState, name } from '$lib/store'

	const { CARD_WIDTH, CARD_HEIGHT, CARD_SPACING } = config

	let hover = -1

	$: hand = orderedHand($gameState.hand)
	$: index = $gameState.players.findIndex((player) => player.name === $name)

	const getCardX = (i: number) => {
		return CARD_SPACING * i
	}
</script>

<div
	class="w-full flex justify-center absolute right-0 translate-x-[110%] bottom-0"
	style={`
            height: ${CARD_HEIGHT}px;
        `}
>
	<div class="flex w-[500px] relative border-box">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		{#each hand as card, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class:border-sunset-400={card.playable}
				class:bg-sunset-400={card.playable}
				class:border-2={card.playable}
				class:cursor-pointer={card.playable}
				class:border-4={hover === i && card.playable}
				class="transition-all box-content"
				style={`
        left: ${getCardX(i)}px;
        transform: translateY(${hover === i ? -30 : 0}px);  
        z-index: ${hover === i ? 20 : i};
        width: ${CARD_WIDTH}px;
        height: ${CARD_HEIGHT}px;    
        position: absolute;
        overflow: visible;
        transition: transform 0.2s ease-in-out;
        border-radius: 10px;
        border: ${i === hover ? 4 : 0}px solid";
        cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
    `}
				on:click={() => {
					console.log('play-card', {
						card,
						player: $name,
						game: $game
					})
					io.emit('play-card', {
						card,
						player: $name,
						game: $game
					})
				}}
			>
				<div class="relative w-full h-full">
					<div
						class="absolute h-full"
						style={`
                            z-index: 40;
                    width: ${i === hand.length - 1 ? CARD_WIDTH : CARD_SPACING}px;
                    
                    `}
						on:mouseenter={() => (hover = i)}
						on:mouseleave={() => (hover = -1)}
					/>
				</div>
				<img
					src={getImageUrl(card)}
					alt="card"
					style={`
					height: ${CARD_HEIGHT}px;
					width: ${CARD_WIDTH}px;
        `}
				/>
			</div>
		{/each}
	</div>
</div>
