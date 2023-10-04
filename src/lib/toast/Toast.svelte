<script lang>
	import { flip } from 'svelte/animate'
	import { fly } from 'svelte/transition'
	import { notifications } from './notifications'

	let background = {
		danger: '#e07a5f',
		success: '#81b29a',
		warning: '#eaac48',
		info: '#7e83a9',
		default: '#f4f1de'
	}

	let text = {
		danger: '#fff',
		success: '#fff',
		warning: '#fff',
		info: '#fff',
		default: '#000'
	}
</script>

<div class="notifications">
	{#each $notifications as notification (notification.id)}
		<div
			animate:flip
			class="toast rounded-xl text-eggshell-400"
			style="background: {background[notification.type]};text: {text[notification.type]};"
			transition:fly={{ y: 30 }}
		>
			<div class="content">{notification.message}</div>
		</div>
	{/each}
</div>

<style>
	.notifications {
		position: fixed;
		top: 10px;
		left: 0;
		right: 0;
		margin: 0 auto;
		padding: 0;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		pointer-events: none;
	}

	.toast {
		flex: 0 0 auto;
		margin-bottom: 10px;
	}

	.content {
		padding: 10px;
		display: block;
		color: white;
		font-weight: 500;
	}
</style>
