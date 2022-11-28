import { UseFormRegister, FieldValues } from 'react-hook-form'
type SelectProps = {
	data: Array<{ value: string; label: string }>
	label?: string
	register: UseFormRegister<FieldValues>
	name: string
	placeholder?: string
	required?: boolean
	error?: any
}

export const Select = ({
	data,
	label,
	register,
	name,
	placeholder,
	required,
	error,
}: SelectProps): React.ReactElement => {
	return (
		<div>
			<label className='font-semibold'>{label}</label>
			<select
				className='w-full border-b py-3 text-gray-600 text-sm placeholder-gray-400 font-semibold lg:py-0.5 xl:py-1.5 xl:text-lg border-gray-400 outline-none'
				placeholder={placeholder}
				{...register(name, { required })}
			>
				<option hidden value=''>
					{placeholder}{' '}
				</option>
				{data.map((item) => (
					<option key={item.value} value={item.value}>
						{item.label}
					</option>
				))}
			</select>
			{error && (
				<p className='text-red-500'>{`${label ?? placeholder} es requerido`}</p>
			)}
		</div>
	)
}
