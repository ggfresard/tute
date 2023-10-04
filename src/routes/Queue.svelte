<script lang="ts">
	import { game, players } from '$lib/store'
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
	<div class="text-lg text-center p-2 text-delft_blue-400">
		Esperando jugadores... {$players.length}/3
	</div>
</div>
