import { UseFormRegister, FieldValues } from 'react-hook-form'
type InputProps = {
	label?: string
	name: string
	placeholder?: string
	type?: 'text' | 'password' | 'email' | 'number'
	readOnly?: boolean
	Icon?: React.ReactNode
	srLabel?: boolean
	register: UseFormRegister<FieldValues>
	onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = ({
	type = 'text',
	name,
	label,
	srLabel,
	Icon,
	placeholder,
	register,
	readOnly = false,
	...props
}: InputProps): React.ReactElement => {
	return (
		<div className='relative text-gray-600 focus-within:text-gray-400'>
			<span className='absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400'>
				{Icon}
			</span>
			<label className='font-semibold'>{label}</label>
			<input
				placeholder={placeholder}
				type={type}
				readOnly={readOnly}
				id={name}
				className={` w-full border-b py-3 text-sm placeholder-gray-400 font-semibold lg:py-0.5 xl:py-1.5 xl:text-lg border-gray-400 outline-none 
                ${readOnly && 'cursor-not-allowed bg-gray-100'}
                ${Icon ? 'pl-10 ' : ''}
                `}
				{...register(name)}
				{...props}
			/>
		</div>
	)
}
