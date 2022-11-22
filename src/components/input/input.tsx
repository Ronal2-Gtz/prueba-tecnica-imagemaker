type InputProps = {
	label: string
	name: string
	type?: 'text' | 'password' | 'email' | 'number'
	readOnly?: boolean
	Icon?: React.ReactNode
	srLabel?: boolean
	onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = ({
	type = 'text',
	name,
	label,
	srLabel,
	Icon,
	readOnly = false,
	...props
}: InputProps): React.ReactElement => {
	return (
		<div className='relative text-gray-600 focus-within:text-gray-400'>
			<span className='absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400'>
				{Icon}
			</span>
			<input
				placeholder={label}
				type={type}
				readOnly={readOnly}
				id={name}
				name={name}
				{...props}
				className={` w-full border-b-2 py-3 text-sm placeholder-gray-300 font-semibold lg:py-0.5 xl:py-1.5 xl:text-lg border-gray-300 outline-none 
                ${readOnly && 'cursor-not-allowed bg-gray-100'}
                ${Icon ? 'pl-10 ': 'pl-3'}
                `}
			/>
		</div>
	)
}
