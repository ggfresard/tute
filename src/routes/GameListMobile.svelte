<script lang="ts">
	import { io } from '$lib/socket'
	import { Paths, availableGames, name, path } from '$lib/store'
	import { notifications } from '$lib/toast/notifications'
	import Button from '../lib/components/Button.svelte'
</script>

<div
	class="md:p-5 p-2 text-xl flex z-20 h-full w-full flex-col items-center gap-2 md:gap-3 fade-in"
>
	<div
		class="md:text-5xl text-xl mt-2 font-bold text-delft_blue-300 text-center truncat overflow-visible"
	>
		Juegos Disponibles
	</div>
	<div class="overflow-hidden relative w-[65%] md:w-[70%] aspect-square flex p-3">
		<div class="overflow-auto flex flex-col flex-1 z-30 rounded-3xl py-2 gap-1">
			{#each $availableGames as item}
				<button
					class="relative"
					on:click={() => {
						io.emit('join-game', { game: item.name, name: $name })
						notifications.success('Uniendo a la sala...')
					}}
				>
					<img
						src="/assets/ButtonsText/ButtonText_Orange_TextField.png"
						alt=""
						class="grow"
						srcset=""
					/>
					<div
						class="top-1/2 absolute -translate-x-1/2 w-full px-6 -translate-y-1/2 left-1/2 flex justify-between"
					>
						<div class="truncate">
							Juego de {item.name}
						</div>
						<div class="">
							{item.players}/5
						</div>
					</div>
				</button>
			{:else}
				<div class="p-2 text-center text-delft_blue-200">No hay juegos disponibles</div>
			{/each}
		</div>
		<img
			src="/assets/BoxesBanners/Box_Blank_Rounded.png"
			class="w-full top-0 left-0 absolute z-20"
			alt=""
		/>
	</div>
	<div class="flex items-center w-full p-2 gap-2 justify-center">
		<Button
			className="max-w-[200px]"
			on:click={() => {
				io.emit('create-game', $name)
				notifications.success('Creando juego...')
			}}>Nuevo Juego</Button
		>
		<Button
			className="max-w-[200px]"
			onClick={() => {
				$path = Paths.None
			}}>Atras</Button
		>
	</div>
</div>
