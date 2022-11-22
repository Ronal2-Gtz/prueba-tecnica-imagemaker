
import { AiOutlineLock, AiOutlineShop, AiOutlineUser } from 'react-icons/ai'
import { Input } from '../../components/input/input'
import { Button } from '../../components/button/button'

export const Login = (): React.ReactElement => {
	return (
		<div className='flex flex-col justify-center items-center w-full h-full  '>
			<div className='flex flex-col gap-y-10 border-[3px] px-7 py-14 md:px-32 rounded-md shadow-2xl'>
				<div className='text-center'>
					<p className='font-semibold text-lg'>Bienvenido a su Portal Empresa</p>
					<p className='text-gray-400 text-sm font-medium'>Acceda al portal ingresando sus datos</p>
				</div>
				<form className='flex flex-col gap-y-10'>
					<Input name='companyRut' label='RUT Empresa' Icon={<AiOutlineShop/>} />
					<Input name='userRut' label='RUT Usuario' Icon={<AiOutlineUser/>}/>
					<Input type='password' name='password' label='Clave' Icon={<AiOutlineLock/>}/>
          <Button padding='xl'>Ingresar</Button>
				</form>
			</div>
		</div>
	)
}
