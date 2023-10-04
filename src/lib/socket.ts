import ioClient from 'socket.io-client'
const ENDPOINT = import.meta.env.VITE_BACK_URL as string

const socket = ioClient(ENDPOINT)

export const io = socket
