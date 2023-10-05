<script lang="ts">
	import { io } from '$lib/socket'
	import { game, players, name } from '$lib/store'
</script>

<div
	class="w-[500px] flex-col gap-2 flex items-center rounded-2xl shadow fade-in p-5 bg-eggshell-400"
>
	<div class="text-xl font-bold text-delft_blue-400">Juego de {$game}</div>
	{#each $players as player}
		<div
			class="text-lg rounded-lg w-full bg-sunset-400 shadow text-center p-2 font-bold text-delft_blue-400"
		>
			{player}
		</div>
	{/each}
	{#if $players.length === 3}
		<button
			class="w-full"
			on:click={() => {
				io.emit('begin-match', {
					game: $game,
					username: $name
				})
			}}>Comenzar Partida</button
		>
	{:else}
		<div class="text-lg text-center p-2 text-delft_blue-400">
			Esperando jugadores... {$players.length}/3
		</div>
	{/if}
</div>
