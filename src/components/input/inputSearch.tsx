import { UseFormRegister, FieldValues } from 'react-hook-form'

type InputSearchProps = {
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

export const InputSearch = ({
	type = 'text',
	name,
	label,
	srLabel,
	Icon,
	placeholder,
	register,
	readOnly = false,
	...props
}: InputSearchProps): React.ReactElement => {
	return (
		<div className='relative text-gray-600 focus-within:text-gray-400'>
			<label className='font-extrabold'>{label}</label>
			<input
				placeholder={placeholder}
				type={type}
				readOnly={readOnly}
				id={name}
				className={` w-full h-10 border-2 rounded-lg p-3 text-sm placeholder-gray-600 font-semibold lg:py-0.5 xl:py-1.5 xl:text-lg border-gray-400 outline-none 
                ${readOnly && 'cursor-not-allowed bg-gray-100'}
				${Icon ? 'pr-10 ' : ''}
                `}
				{...register(name)}
				{...props}
			/>
			<span className='absolute inset-y-0 right-5 flex items-center pl-2 text-gray-400'>
				{Icon}
			</span>
		</div>
	)
}
