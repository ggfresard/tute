<script lang="ts">
	import { CardNumbers, CardTypes, getImageUrl } from '$lib/cards'
	import { gameState, results } from '$lib/store'
	import { config } from '$lib/config'
	import CardStack from './CardStack.svelte'
	import { fade } from 'svelte/transition'
	const { CARD_HEIGHT, CARD_WIDTH } = config
</script>

{#if $results}
	<div
		class="w-screen h-screen flex justify-center items-center pt-5 z-[200] fixed left-0 bottom-0 bg-delft_blue-200 bg-opacity-90"
	>
		<div
			in:fade
			out:fade
			class="rounded-lg bg-cambridge_blue-400 shadow p-3 flex flex-col gap-2 items-center"
		>
			{#if $results.type === 'tute'}
				<div class="text-4xl text-delft_blue-400 font-bold">
					Tute de {$results.player}!
				</div>
				<div class="flex gap-2 items-center justify-center">
					{#each Object.values(CardTypes) as type}
						<img
							src={getImageUrl({
								type,
								number: $results.tuteType
							})}
							alt=""
							style={`height: ${CARD_HEIGHT}px; width: ${CARD_WIDTH}px;`}
						/>
						<!-- content here -->
					{/each}
				</div>
			{:else if $results.type === 'capote'}
				<div class="text-4xl text-delft_blue-400 font-bold">
					{$results.positive
						? `Capote de ${$results.player}!`
						: `${$results.player} pierde por aweonao!`}
				</div>
			{:else if $results.type === 'normal'}
				<div class="text-4xl text-delft_blue-400 font-bold">Resultados</div>
				{#each $results.players as player}
					<div class="p-2 rounded-lg bg-eggshell-400 w-full shadow-lg">
						<div class="text-xl text-delft_blue-400 text-center font-bold">{player.name}</div>
						<div class="grid gap-2 grid-cols-4">
							{#if player.stack?.filter((card) => card.number === CardNumbers.ONE).length > 0}
								<div class="flex items-center gap-1">
									<CardStack
										cards={player.stack?.filter((card) => card.number === CardNumbers.ONE)}
									/>
									: {player.stack?.filter((card) => card.number === CardNumbers.ONE).length * 11}
								</div>
							{/if}
							{#if player.stack?.filter((card) => card.number === CardNumbers.THREE).length > 0}
								<div class="flex items-center gap-1">
									<CardStack
										cards={player.stack?.filter((card) => card.number === CardNumbers.THREE)}
									/>
									:
									{player.stack?.filter((card) => card.number === CardNumbers.THREE).length * 10}
								</div>
							{/if}
							{#if player.stack?.filter((card) => card.number === CardNumbers.TEN).length > 0}
								<div class="flex items-center gap-1">
									<CardStack
										cards={player.stack?.filter((card) => card.number === CardNumbers.TEN)}
									/>
									: {player.stack?.filter((card) => card.number === CardNumbers.TEN).length * 4}
								</div>
							{/if}
							{#if player.stack?.filter((card) => card.number === CardNumbers.NINE).length > 0}
								<div class="flex items-center gap-1">
									<CardStack
										cards={player.stack?.filter((card) => card.number === CardNumbers.NINE)}
									/>
									: {player.stack?.filter((card) => card.number === CardNumbers.NINE).length * 3}
								</div>
							{/if}
							{#if player.stack?.filter((card) => card.number === CardNumbers.EIGHT).length > 0}
								<div class="flex items-center gap-1">
									<CardStack
										cards={player.stack?.filter((card) => card.number === CardNumbers.EIGHT)}
									/>
									:
									{player.stack?.filter((card) => card.number === CardNumbers.EIGHT).length * 2}
								</div>
							{/if}
							{#if player.sings.length}
								<div class="flex items-center gap-1">
									Cantos
									<CardStack
										cards={player.sings.map((sing) => ({ number: CardNumbers.ONE, type: sing }))}
									/>
									:
									{player.sings.reduce(
										(acc, curr) => acc + (curr === $gameState.fail ? 40 : 20),
										0
									)}
								</div>
							{/if}
							{#if $results.players.findIndex((p) => p.name === player.name) === $results.last}
								<div class="flex items-center gap-1">Diez de ultima: 10</div>
							{/if}
						</div>
						<div class="text-xl text-delft_blue-400 font-bold">Total: {player.total}</div>
					</div>
				{/each}
				<div class="text-2xl text-delft_blue-400 font-bold">
					Perdedores: {$results.loosers.join(', ')}
				</div>
			{/if}
			<button
				on:click={() => {
					results.set(undefined)
				}}>Ok</button
			>
		</div>
	</div>
{/if}
