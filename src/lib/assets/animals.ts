import { getHashedOption } from '$lib'

enum Animals {
	Bear = 'bear',
	Buffalo = 'buffalo',
	chick = 'chick',
	chicken = 'chicken',
	cow = 'cow',
	crocodile = 'crocodile',
	dog = 'dog',
	duck = 'duck',
	elephant = 'elephant',
	frog = 'frog',
	giraffe = 'giraffe',
	goat = 'goat',
	gorilla = 'gorilla',
	hippo = 'hippo',
	horse = 'horse',
	monkey = 'monkey',
	moose = 'moose',
	narwhal = 'narwhal',
	owl = 'owl',
	panda = 'panda',
	parrot = 'parrot',
	penguin = 'penguin',
	pig = 'pig',
	rabbit = 'rabbit',
	rhino = 'rhino',
	sloth = 'sloth',
	snake = 'snake',
	walrus = 'walrus',
	whale = 'whale',
	zebra = 'zebra'
}

export const getAnimalImage = (text: string) => {
	const animal = getHashedOption(text, Object.values(Animals))
	return `/assets/kenney_animal-pack-redux/PNG/Round (outline)/${animal}.png`
}
