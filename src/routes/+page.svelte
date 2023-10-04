<script lang="ts">
	import { onMount } from 'svelte'
	import { io } from '$lib/socket'
	import { notifications } from '$lib/toast/notifications'
	import Lobby from './Lobby.svelte'
	import Game from './Game.svelte'
	import { Paths, availableGames, path, game, players, gameState } from '$lib/store'
	onMount(() => {
		io.onAny((event, ...args) => {
			console.log(event, args)
		})
		io.on('games', (games) => {
			availableGames.set(games)
		})
		io.on('room-exists', () => {
			notifications.danger('Ya existe una sala con ese nombre')
		})
		io.on('room-full', () => {
			notifications.danger('La sala esta llena')
		})
		io.on('room-doesnt-exist', () => {
			notifications.danger('La sala no existe')
		})
		io.on('waiting-for-players', (state) => {
			$path = Paths.Waiting
			$game = state.name
			$players = state.players
		})
		io.on('game-state', (state) => {
			$gameState = state
			$path = Paths.Game
		})
	})
</script>

<div class="h-screen p-20 flex bg-delft_blue-400">
	{#if $path === 'game'}
		<Game />
	{:else}
		<Lobby />
	{/if}
</div>
