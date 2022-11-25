const appearances = {
	primary: 'text-white bg-primary border-primary',
	outLinePrimary:
		'bg-transparent border-primary border-2 text-primary font-bold',
	outLineSecondary:
		'bg-transparent border-secondary border-2 text-secondary font-bold',
	secondaryTransparent: 'bg-transparent text-secondary font-bold',
	disabled: 'bg-transparent text-disabled font-bold',
}

const buttonSizes = {
	xs: 'text-xs xl:text-sm',
	sm: 'text-xs xl:text-base',
	md: 'text-xs xl:text-lg',
	lg: 'text-xs lg:text-sm xl:text-2xl',
	xl: 'text-xs lg:text-base xl:text-3xl',
} as const

const buttonPaddings = {
	xs: 'py-2.5 px-2.5 lg:py-3',
	sm: 'px-6 py-2.5 lg:py-3',
	md: 'px-10 xl:px-16 py-2.5 lg:py-3',
	lg: 'px-14 xl:px-20 py-2.5 lg:py-3',
	xl: 'px-20 xl:px-24 py-2.5 lg:py-3',
	none: '',
} as const

const buttonRounded = {
	xs: 'rounded',
	sm: 'rounded-sm',
	md: 'rounded-md',
	lg: 'rounded-lg',
	xl: 'rounded-xl',
	full: 'rounded-full',
}

const iconButtonSizes = {
	xs: 'w-4',
	sm: 'w-8',
	md: 'w-11',
	lg: 'w-24',
	xl: 'w-48',
}

export {
	appearances,
	buttonSizes,
	iconButtonSizes,
	buttonPaddings,
	buttonRounded,
}
