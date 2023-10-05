<script lang="ts">
	import { gameState, players } from '$lib/store'

	$: places = Array.from(new Set($gameState.players.map((player) => player.points))).sort()
</script>

{#if $gameState.status === 'finished'}
	<div class="flex-1 flex items-center flex-col gap-2 p-4">
		<div class="text-3xl text-delft_blue-400">Resultado Final</div>
		<div>
			{#each places as score, i}
				{#each $gameState.players.filter((p) => p.points === score) as player}
					<div class="flex gap-2 items-center">
						{i + 1}. {player.name}
						{score}
						{#if i === 0}
							🏆
						{/if}
					</div>
				{/each}
			{/each}
		</div>
	</div>
{/if}
