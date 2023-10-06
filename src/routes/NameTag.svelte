<script lang="ts">
	import type { GameState } from '$lib/cards'
	import { gameState } from '$lib/store'

	export let player: GameState['players'][0]
	export let position: string

	const parseName = (name: string) => {
		if (name?.toLocaleLowerCase().includes('zuri')) {
			return name + ' la chupa'
		}
		return name
	}
</script>

<div
	class={`absolute items-end flex gap-1 ${position === 'right' ? 'right-3' : 'left-3'} ${
		position === 'middle' ? 'bottom-0' : 'top-0'
	}`}
>
	<div
		class={`flex z-40 flex-col justify-start w-[160px] relative items-start gap-2 ${
			position !== 'right' ? 'left-3' : 'right-3'
		} p-3 ${
			position === 'middle' ? 'rounded-t-xl' : 'rounded-b-xl'
		} text-lg font-bold bg-delft_blue-400 text-eggshell-300 ${
			position === 'middle' ? 'bottom-0' : 'top-0'
		}`}
	>
		<div class="flex items-center gap-2 justify-start">
			<i class="fa fa-user text-burnt_sienna-400" />
			<div class="flex-1 truncate">{parseName(player?.name)}</div>
		</div>
		<div class="h-[2px] m-auto w-[80%] bg-burnt_sienna-400" />
		<div class=" m-auto flex gap-1 text-sm">
			<div class="flex items-center gap-3">
				<i class=" w-[10px] fa-solid fa-music text-burnt_sienna-400" />
				{player?.sings.reduce((acc, curr) => acc + (curr === $gameState.fail ? 2 : 1), 0) ?? 0}
			</div>
			<div class="flex items-center gap-3">
				<i class=" w-[10px] fa-solid fa-layer-group text-burnt_sienna-400" />
				{player?.stack ?? 0}
			</div>
			<div class="flex items-center gap-3">
				<i class=" w-[10px] fa-solid fa-skull text-burnt_sienna-400" />
				{player?.points ?? 0}
			</div>
		</div>
		{#if $gameState.turn === $gameState.players.findIndex((p) => p.name === player?.name)}
			<i
				class={`text-7xl fa-solid ${
					position === 'middle' ? 'fa-arrow-down-long' : 'fa-arrow-up-long'
				} ${
					position === 'middle' ? 'top-0 -translate-y-[120%]' : 'bottom-0 translate-y-[120%]'
				} animate-pulse absolute text-burnt_sienna-400`}
			/>
		{/if}
		<slot />
	</div>
</div>
