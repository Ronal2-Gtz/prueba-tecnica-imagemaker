import { AiOutlineLock, AiOutlineShop, AiOutlineUser } from 'react-icons/ai'
import { Input, Button } from '../../components'
import { checkingAutentication } from '../../store/auth/thunks'
import { useAppDispatch } from '../../hooks/useDispatch'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

type FormLogin = {
	companyRut: string
	userRut: string
	password: string
}

export const Login = (): React.ReactElement => {
	const dispatch = useAppDispatch()
	const { register, handleSubmit } = useForm()

	const login: SubmitHandler<FieldValues> = (data) => {
		const { companyRut, password, userRut } = data as FormLogin
		dispatch(checkingAutentication({ companyRut, password, userRut }))
	}

	return (
		<div className='flex flex-col justify-center items-center w-full h-full mt-10'>
			<div className='flex flex-col gap-y-10 border-[3px] px-7 py-14 md:px-32 rounded-md shadow-2xl'>
				<div className='text-center'>
					<p className='font-semibold text-lg'>
						Bienvenido a su Portal Empresa
					</p>
					<p className='text-gray-400 text-sm font-medium'>
						Acceda al portal ingresando sus datos
					</p>
				</div>
				<form onSubmit={handleSubmit(login)} className='flex flex-col gap-y-10'>
					<Input
						name='companyRut'
						placeholder='RUT Empresa'
						Icon={<AiOutlineShop />}
						register={register}
					/>
					<Input
						name='userRut'
						placeholder='RUT Usuario'
						Icon={<AiOutlineUser />}
						register={register}
					/>
					<Input
						type='password'
						name='password'
						placeholder='Clave'
						Icon={<AiOutlineLock />}
						register={register}
					/>
					<Button type='submit' padding='xl'>
						Ingresar
					</Button>
				</form>
			</div>
		</div>
	)
}
