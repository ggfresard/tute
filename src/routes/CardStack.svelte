<script lang="ts">
	import { getImageUrl, type Card } from '$lib/cards'

	export let cards: Card[]
	export const cardWidth = 33
	export const cardHeight = 50
	export const cardSpacing = 16
</script>

<div
	class="relative"
	style={`
        width: ${cardWidth + cardSpacing * (cards.length - 1)}px;
        height: ${cardHeight}px;
    `}
>
	{#each cards as card, i}
		<img
			src={getImageUrl(card)}
			alt=""
			style={`
                height: ${cardHeight}px;
                width: ${cardWidth}px;
                left: ${cardSpacing * i}px;
                position: absolute;
            `}
		/>
	{/each}
</div>
