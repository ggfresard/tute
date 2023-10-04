<script lang="ts">
	import { getImageUrl, orderedHand } from '$lib/cards'
	import { config } from '$lib/config'
	import { io } from '$lib/socket'
	import { game, gameState, name } from '$lib/store'

	const { CARD_WIDTH, CARD_HEIGHT, CARD_SPACING } = config

	let hover = -1

	$: hand = orderedHand($gameState.hand)

	const getCardX = (i: number) => {
		const even = hand.length % 2 === 0
		if (even) {
			return CARD_SPACING * (i - hand.length / 2) - CARD_WIDTH / 2
		} else {
			return CARD_SPACING * (i - (hand.length - 1) / 2) - CARD_WIDTH / 2
		}
	}
</script>

<div
	class="w-full flex justify-center"
	style={`
            height: ${CARD_HEIGHT}px;
        `}
>
	<div class="flex w-[500px] relative">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		{#each hand as card, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class=""
				style={`
        left: 50%;
        transform: translateX(${getCardX(i)}px) translateY(${hover === i ? -30 : 0}px);});  
        z-index: ${hover === i ? 20 : i};
        width: ${CARD_WIDTH}px;
        height: ${CARD_HEIGHT}px;    
        position: absolute;
        overflow: visible;
        transition: transform 0.2s ease-in-out;
        border-radius: 10px;
        border: ${i === hover ? 2 : 0}px solid #000;
        cursor: pointer;
       
        
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
            width: ${CARD_WIDTH}px;
            height: ${CARD_HEIGHT}px;
            position: absolute;
            top: 0;
        `}
				/>
			</div>
		{/each}
	</div>
</div>
