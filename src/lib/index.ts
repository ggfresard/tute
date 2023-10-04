// place files you want to import through the `$lib` alias in this folder.

export function random<T extends object>(e: T): T[keyof T] {
	const keys = Object.keys(e) as (keyof T)[];
	return e[keys[Math.floor(Math.random() * keys.length)]];
}
