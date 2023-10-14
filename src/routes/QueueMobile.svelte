<script lang="ts">
	import { getAnimalImage } from '$lib/assets/animals'
	import { io } from '$lib/socket'
	import { Paths, path, game, players, name } from '$lib/store'
	import { notifications } from '$lib/toast/notifications'
	import Button from '../lib/components/Button.svelte'
</script>

<div
	class="md:p-5 p-2 text-xl flex z-20 h-full w-full flex-col items-center gap-2 md:gap-3 fade-in"
>
	<div
		class="md:text-5xl text-xl mt-2 font-bold text-delft_blue-300 text-center truncat overflow-visible"
	>
		Juego de {$game}
	</div>
	<div
		class="overflow-y-visible overflow-x-visible relative w-[65%] md:w-[70%] aspect-square flex p-3"
	>
		<div
			class="overflow-y-visible overflow-x-visible flex flex-col flex-1 z-30 rounded-3xl py-2 gap-3"
		>
			{#each $players as player}
				<div class="relative text-white overflow-x-visible">
					<img
						src="/assets/ButtonsText/ButtonText_Blue_TextInput.png"
						alt=""
						class="grow"
						srcset=""
					/>
					<div
						class="top-1/2 absolute -translate-x-1/2 w-full px-3 -translate-y-1/2 left-1/2 flex justify-between"
					>
						<div class="truncate">
							{player}
						</div>
					</div>
					<img
						class="w-[15%] absolute right-0 top-1/2 translate-x-7 -translate-y-1/2"
						src={getAnimalImage(player)}
						alt=""
					/>
				</div>
			{:else}
				<div class="p-2 text-center text-delft_blue-200">No hay juegos disponibles</div>
			{/each}
		</div>
	</div>
	<div class="flex items-center w-full p-2 gap-2 justify-center">
		<Button
			className="max-w-[200px]"
			disabled={$players.length < 3}
			onClick={() => {
				io.emit('begin-match', {
					game: $game,
					username: $name
				})
			}}>Comenzar</Button
		>
		<Button
			className="max-w-[200px]"
			onClick={() => {
				$path = Paths.None
				io.disconnect()
				io.connect()
				$game = ''
			}}>Salir</Button
		>
	</div>
</div>
