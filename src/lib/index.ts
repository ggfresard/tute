/* eslint-disable @typescript-eslint/no-explicit-any */
// place files you want to import through the `$lib` alias in this folder.

export function random<T extends object>(e: T): T[keyof T] {
	const keys = Object.keys(e) as (keyof T)[]
	return e[keys[Math.floor(Math.random() * keys.length)]]
}

export type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>

export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export const mod = <T extends number>(n: number, m: T) => {
	const result = ((n % m) + m) % m
	return result as Range<0, T>
}

export const isMobile = () => {
	if (typeof window === 'undefined') return false
	console.log(navigator?.userAgent)
	return window.navigator
		? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator?.userAgent)
		: false
}

export const isLandscape = () => {
	return window.innerWidth > window.innerHeight
}

export const getHashedOption = (text: string, options: any[]) => {
	const hash = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
	return options[hash % options.length]
}
