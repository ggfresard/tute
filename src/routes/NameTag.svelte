<script lang="ts">
	import type { GameState } from '$lib/cards'
	import { gameState } from '$lib/store'
	import { mod, type Range } from '$lib'
	import { layout, Positions } from '$lib/config'

	export let player: GameState['players'][0]
	$: index = mod(
		$gameState.players.findIndex((p) => player.name === p.name) - $gameState.index,
		$gameState.players.length
	) as Range<0, 5>
	$: position = layout[$gameState.players.length as Range<3, 5>][index]
	$: positionClass = layoutPositions[position]
	$: roundedClass = roundedClasses[position]
	$: arrowClass =
		position in [Positions.RightBottom, Positions.LeftBottom]
			? 'fa-arrow-down-long top-0 -translate-y-[120%]'
			: 'fa-arrow-up-long bottom-0 translate-y-[120%]'

	const roundedClasses = {
		[Positions.LeftBottom]: 'rounded-t-xl',
		[Positions.RightBottom]: 'rounded-t-xl',
		[Positions.RightTop]: 'rounded-b-xl',
		[Positions.MiddleTop]: 'rounded-b-xl',
		[Positions.LeftTop]: 'rounded-b-xl'
	}

	const layoutPositions = {
		[Positions.LeftBottom]: 'bottom-0 left-3',
		[Positions.RightBottom]: 'bottom-0 right-3',
		[Positions.RightTop]: 'top-0 right-3',
		[Positions.MiddleTop]: 'top-0 left-1/2 -translate-x-1/2',
		[Positions.LeftTop]: 'top-0 left-3'
	}

	const parseName = (name: string) => {
		if (name?.toLocaleLowerCase().includes('zuri')) {
			return name + ' la chupa'
		}
		return name
	}
</script>

<div class={`absolute items-end flex gap-1 ${positionClass}`}>
	<div
		class={`flex z-40 flex-col justify-start w-[160px] relative items-start gap-2 p-3 text-lg font-bold bg-delft_blue-400 text-eggshell-300 ${positionClass} ${roundedClass}`}
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
				class={`text-7xl fa-solid ${arrowClass} z-[70] animate-pulse absolute text-burnt_sienna-400`}
			/>
		{/if}
		<slot />
	</div>
</div>
