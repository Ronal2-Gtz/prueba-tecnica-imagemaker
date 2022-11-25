import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import {
	appearances,
	buttonPaddings,
	buttonRounded,
	buttonSizes,
} from './utils'

type ButtonProps = {
	type?: 'button' | 'submit' | 'reset'
	appearance?: keyof typeof appearances
	block?: boolean
	disabled?: boolean
	rounded?: keyof typeof buttonRounded
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	children: React.ReactNode
	size?: keyof typeof buttonSizes
	padding?: keyof typeof buttonPaddings
	isLoading?: boolean
	rightIcon?: React.ReactNode
	leftIcon?: React.ReactNode
}

export const Button = ({
	type = 'button',
	appearance = 'primary',
	block = false,
	rounded = 'md',
	children,
	size = 'md',
	padding = 'md',
	isLoading,
	disabled,
	rightIcon,
	leftIcon,
	...props
}: ButtonProps): React.ReactElement => {
	return (
		<button
			className={`
                ${block ? 'flex w-full' : 'inline-flex'}
                ${appearances[appearance]}
                ${rightIcon ? 'justify-between' : 'justify-center'}
                ${buttonSizes[size]}
                ${buttonPaddings[padding]}
                ${buttonRounded[rounded]}
                ${disabled ? `cursor-not-allowed ${appearances.disabled}` : ''}
            `}
			type={type}
			disabled={isLoading ?? disabled}
			{...props}
		>
			{isLoading && (
				<AiOutlineLoading3Quarters
					className={`mt-0.5 mr-1 animate-spin ${buttonSizes[size]}`}
				/>
			)}
			{leftIcon}
			{children}
			{rightIcon}
		</button>
	)
}
