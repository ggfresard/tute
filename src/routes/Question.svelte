<script lang="ts">
	import { io } from '$lib/socket'
	import { question } from '$lib/store'
	import { fade } from 'svelte/transition'
</script>

{#if $question !== undefined}
	<div
		class="h-screen w-screen absolute top-0 left-0 flex items-center justify-center bg-black bg-opacity-30 z-[100]"
		transition:fade
	>
		<div class="w-[500px] p-2 bg-sunset-400 rounded-lg shadow flex items-center flex-col gap-2">
			<div class="font-bold text-delft_blue-400 text-2xl">
				{$question.question}
			</div>
			{#each Object.keys($question.options) as option}
				<button
					class="w-full"
					on:click={() => {
						$question &&
							io.emit($question.response.message, {
								...$question.response.params,
								[$question.response.responseKey]: $question.options[option]
							})
						question.set(undefined)
					}}
				>
					{option}
				</button>
			{/each}
		</div>
	</div>
{/if}
