<script lang="ts">
	export let className: string = ''
	export let disabled: boolean = false
	export let onClick: () => void = () => {}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<button
	class={`!bg-transpatent rounded-full w-full relative disabled:opacity-50 disabled:pointer-events-none active:translate-y-0 focus:outline-none hover:-translate-y-1 transition-transform shadow-md hover:shadow-lg active:shadow-md; ${className}`}
	on:click={onClick}
	{disabled}
>
	<img src="/assets/ButtonsText/ButtonText_Large_Green_Round.png" class="w-full" alt="" />

	<div
		class="absolute truncate w-full md:text-xl top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[60%] text-black text-opacity-20"
	>
		<slot />
	</div>
	<div
		class="absolute truncate w-full md:text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
	>
		<slot />
	</div>
</button>
