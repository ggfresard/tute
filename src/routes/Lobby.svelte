<script lang="ts">
	import { io } from '$lib/socket'
	import { path, name, Paths } from '$lib/store'
	import { notifications } from '$lib/toast/notifications'
	import GameList from './GameList.svelte'
	import Queue from './Queue.svelte'
</script>

<div
	class="flex h-full w-full items-center flex-col gap-2 fade-in text-eggshell-400 font-bold text-lg"
>
	<img src="/logo.png" class="w-[500px] mt-[50px]" alt="" />

	{#if $path === 'waiting'}
		<Queue />
	{:else}
		<div class="h-[40px] flex items-center w-[400px] gap-10">
			Nombre:
			{#if $path === ''}
				<input class="flex-1 text-end" bind:value={$name} />
			{:else}
				<div class="">
					{$name}
				</div>
			{/if}
		</div>
		{#if $path === ''}
			<div class="flex fade-in items-center w-[400px] gap-2 justify-center">
				<button
					class="flex-1"
					disabled={!$name.length}
					on:click={() => {
						io.emit('join', $name)
						io.emit('create-game', $name)
						notifications.success('Creando juego...')
					}}>Crear Nuevo Juego</button
				>
				<button
					class="flex-1"
					on:click={() => {
						io.emit('get-games')
						$path = Paths.Join
					}}
					disabled={!$name.length}>Unirse</button
				>
			</div>
		{:else if $path === 'create'}
			<br />
		{:else}
			<GameList />
			<button
				class="w-[500px] fade-in"
				on:click={() => {
					$path = Paths.None
				}}>Atras</button
			>
		{/if}
	{/if}
</div>
