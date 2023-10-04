import { writable, derived, type Writable, type Readable } from 'svelte/store'

interface Notification {
	id: string
	type: 'default' | 'danger' | 'warning' | 'info' | 'success'
	message: string
	timeout: number
}

function createNotificationStore() {
	const _notifications: Writable<Notification[]> = writable([] as Notification[])

	function send(message: string, type = 'default', timeout: number) {
		_notifications.update((state: Notification[]) => {
			return [...state, { id: id(), type, message, timeout }] as Notification[]
		})
	}

	const notifications: Readable<Notification[]> = derived(
		_notifications,
		($_notifications, set) => {
			set($_notifications)
			if ($_notifications.length > 0) {
				const timer = setTimeout(() => {
					_notifications.update((state) => {
						state.shift()
						return state
					})
				}, $_notifications[0].timeout)
				return () => {
					clearTimeout(timer)
				}
			}
		}
	)
	const { subscribe } = notifications

	return {
		subscribe,
		send,
		default: (msg: string) => send(msg, 'default', 1000),
		danger: (msg: string) => send(msg, 'danger', 500),
		warning: (msg: string) => send(msg, 'warning', 5000),
		info: (msg: string) => send(msg, 'info', 2000),
		success: (msg: string) => send(msg, 'success', 3000)
	}
}

function id() {
	return '_' + Math.random().toString(36).substr(2, 9)
}

export const notifications = createNotificationStore()
