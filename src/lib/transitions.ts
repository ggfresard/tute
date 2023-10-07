export const fadeTowards = (
	node: HTMLElement,
	params: {
		delay?: number
		duration?: number
		easing?: (t: number) => number
		left?: number
		top?: number
		rotation?: number
		right?: number
		bottom?: number
	}
) => {
	const match = node.style.transform.match(/rotate\((\d+)deg\)/)
	const rotation = !match ? 0 : parseInt(match[1])

	return {
		delay: params.delay || 0,
		duration: params.duration || 500,
		css: (t: number) => {
			return `
            ${
							params.left !== undefined
								? `left: ${params.left + (parseFloat(node.style.left) - params.left) * t}%;`
								: ''
						}
            ${
							params.right !== undefined
								? `right: ${params.right + (parseFloat(node.style.right) - params.right) * t}%;`
								: ''
						}
            ${
							params.top !== undefined
								? `top: ${params.top + (parseFloat(node.style.top) - params.top) * t}%;`
								: ''
						}
            ${
							params.bottom !== undefined
								? `bottom: ${params.bottom + (parseFloat(node.style.bottom) - params.bottom) * t}%;`
								: ''
						}
            ${
							params.rotation !== undefined
								? `transform: ${
										match
											? node.style.transform.replace(
													/rotate\((\d+)deg\)/,
													`rotate(${params.rotation + (rotation - params.rotation) * t}deg)`
											  )
											: node.style.transform + ` rotate(${params.rotation * t}deg)`
								  };`
								: ''
						}
            opacity: ${t};
            `
		}
	}
}
