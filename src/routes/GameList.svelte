<script lang="ts">
	import { io } from '$lib/socket'
	import { availableGames, name } from '$lib/store'
	import { notifications } from '$lib/toast/notifications'
</script>

<div class="w-[500px] rounded-2xl shadow fade-in p-5 bg-eggshell-400">
	<div class="flex overflow-auto rounded-2xl flex-col gap-3 h-[350px] shadow bg-delft_blue-400 p-2">
		{#each $availableGames as item}
			<button
				class="bg-sunset-400 text-delft_blue-400"
				on:click={() => {
					io.emit('join-game', { game: item.name, name: $name })
					notifications.success('Uniendo a la sala...')
				}}
			>
				<div class="w-full flex items-center justify-between">
					<div class="">
						Juego de {item.name}
					</div>
					<div class="">
						{item.players}/5
					</div>
				</div>
			</button>
		{:else}
			<div class="p-2 text-center text-eggshell-400">No hay juegos disponibles</div>
		{/each}
	</div>
</div>
