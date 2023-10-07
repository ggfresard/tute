import ioClient from 'socket.io-client'
const ENDPOINT = import.meta.env.VITE_BACK_URL as string

const socket = ioClient(ENDPOINT)

if (import.meta.env.VITE_SOCKET_DEBUG === 'true') {
	socket.onAny((event, ...args) => {
		console.log(event, args)
	})
	socket.onAnyOutgoing((event, ...args) => {
		console.log(event, args)
	})
}

export const io = socket
