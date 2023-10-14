<script lang="ts">
	import { getAnimalImage } from '$lib/assets/animals'
	import { io } from '$lib/socket'
	import { path, name, Paths, session } from '$lib/store'
	import { notifications } from '$lib/toast/notifications'
	import Button from '../lib/components/Button.svelte'
	import GameListMobile from './GameListMobile.svelte'
	import QueueMobile from './QueueMobile.svelte'

	io.on('joined', (sessionName) => {
		$name = sessionName
		$session = sessionName
		loging = false
	})

	io.on('join-error', (error) => {
		notifications.warning(error)
		loging = false
		$session = undefined
	})

	var loging = false
</script>

<div
	class="w-[90vw] h-[90vw] m-auto flex-col flex items-center justify-center gap-4 relative max-w-[600px] max-h-[600px]"
>
	<img
		src="/assets/BoxesBanners/SVG/Box_Orange_Rounded.svg"
		class="w-full h-full top-0 left-0 absolute z-[0]"
		alt=""
	/>

	{#if $path === 'waiting'}
		<QueueMobile />
	{:else if $path === ''}
		<img src="/logo.png" class="z-[10] w-[90%]" alt="" />
		<div
			class="h-[18vw] max-h-[120px] z-[20] text-xl flex items-center px-5 text-delft_blue-300 gap-2"
		>
			<img src={getAnimalImage($name)} class="w-[18vw] max-w-[120px]" alt="" />
			{#if $path === ''}
				<div class="relative">
					<img
						src="/assets/ButtonsText/SVG/ButtonText_Blank_TextField.svg"
						class="max-h-[60px] w-full z-10"
						alt=""
					/>
					<input
						placeholder="Ingresa tu nombre..."
						class="z-20 shadow-none absolute top-1/2 w-full bg-transparent -translate-y-1/2 left-1/2 -translate-x-1/2"
						bind:value={$name}
					/>
				</div>
			{:else}
				<div class="">
					{$name}
				</div>
			{/if}
		</div>
		<div class="flex max-w-[90%] fade-in items-center w-[400px] gap-2 justify-center">
			{#if !$session}
				<div class="w-1/2 m-auto">
					<Button
						disabled={!$name.length || loging}
						onClick={() => {
							io.emit('join', $name)
							notifications.success('Entrando...')
						}}>Entrar</Button
					>
				</div>
			{:else}
				<Button
					className="flex-1"
					disabled={!$name.length}
					onClick={() => {
						io.emit('create-game', $name)
						notifications.success('Creando juego...')
					}}>Nuevo Juego</Button
				>
				<Button
					className="flex-1"
					onClick={() => {
						io.emit('get-games')
						$path = Paths.Join
					}}
					disabled={!$name.length}>Unirse</Button
				>
			{/if}
		</div>
	{:else}
		<GameListMobile />
	{/if}
</div>
