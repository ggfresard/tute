<script lang="ts">
	const n: number = 4
	const h = 150
	const w = 100
</script>

<div class="bg-red-500 h-screen w-screen relative">
	<div class="w-full h-[2px] absolute top-1/2 -translate-y-1/2 bg-green-600" />
	<div class="h-full w-[2px] absolute left-1/2 -translate-x-1/2 bg-green-600" />
	{#each new Array(n).fill(0) as item, i}
		<div
			class={` bg-slate-800 absolute left-[50%] top-[50%] flex-col gap-2 flex justify-center items-center text-white border-[2px] border-white rounded-lg`}
			style={`
        transform: translate(${
					-h * Math.sin(((-2 * i + (n === 3 ? 0 : 1)) * 180 * Math.PI) / n / 180) - 0.5 * w
				}px, ${
				h * (Math.cos(((-2 * i + (n === 3 ? 0 : 1)) * 180 * Math.PI) / n / 180) - 0.5)
			}px) rotate(${((-2 * i + (n === 3 ? 0 : 1)) * 180) / n}deg);
            height: ${h}px;
            width: ${w}px;
    
    `}
		>
			{i}
		</div>
	{/each}
</div>
