<script lang="ts">
	import { io } from '$lib/socket'
	import { Paths, gameState, path } from '$lib/store'

	$: places = Array.from(new Set($gameState.players.map((player) => player.points))).sort()
</script>

{#if $gameState.status === 'finish'}
	<div class="flex-1 flex items-center flex-col gap-2 p-4 z-50 justify-center">
		<div
			class=" bg-sunset-400 shadow-lg p-4 flex-col flex gap-2 rounded-lg border-burnt_sienna-400 border-dotted border-2"
		>
			<div class="text-3xl text-delft_blue-400 font-bold">Resultado Final</div>
			<div>
				{#each places as score, i}
					{#each $gameState.players.filter((p) => p.points === score) as player}
						<div class="flex gap-2 items-center justify-between text-delft_blue-400 text-xl">
							{i + 1}. {player.name}
							<div class="text-cambridge_blue-200">
								{#if i === 0}
									🏆
								{/if}
								{score}
							</div>
						</div>
					{/each}
				{/each}
			</div>
			<button
				class="w-full"
				on:click={() => {
					$path = Paths.None
					io.disconnect()
					io.connect()
				}}>Lobby</button
			>
		</div>
	</div>
{/if}
