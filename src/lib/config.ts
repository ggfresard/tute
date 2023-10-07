export const config = {
	CARD_WIDTH: 100,
	CARD_HEIGHT: 170,
	CARD_SPACING: 50,
	BOARD_Y_OFFSET: 30,
	BOARD_X_OFFSET: 50
}

export enum Positions {
	LeftBottom,
	RightBottom,
	RightTop,
	MiddleTop,
	LeftTop
}

export const layout = {
	[3]: [Positions.LeftBottom, Positions.RightTop, Positions.LeftTop],
	[4]: [Positions.LeftBottom, Positions.RightBottom, Positions.RightTop, Positions.LeftTop],
	[5]: [
		Positions.LeftBottom,
		Positions.RightBottom,
		Positions.RightTop,
		Positions.MiddleTop,
		Positions.LeftTop
	]
}

export const positionValues = {
	[Positions.LeftBottom]: { top: 80, left: 20, rotation: 45 },
	[Positions.RightBottom]: { top: 80, left: 100, rotation: -45 },
	[Positions.RightTop]: { top: 0, left: 100, rotation: -135 },
	[Positions.MiddleTop]: { top: 0, left: 50, rotation: -180 },
	[Positions.LeftTop]: { top: 0, left: 0, rotation: 135 }
}
