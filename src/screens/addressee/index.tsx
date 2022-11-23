import { InputSearch } from '../../components'
import { useForm } from 'react-hook-form'
import { AiOutlineSearch } from 'react-icons/ai'
import { CreateAddresseeModal } from './components/createAddresseeModal'
import { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/useDispatch'
import { getAddresseeThunks } from '../../store/addressee/thunksAddressee'
import { TableAddressee } from './components/table/tableAddressee'

export const Addressee = (): React.ReactElement => {
	const dispatch = useAppDispatch()
	const { register } = useForm()

	useEffect(() => {
		dispatch(getAddresseeThunks())
	}, [dispatch])


	return (
		<div className='flex flex-col justify-center gap-y-10 w-9/12 h-full m-auto '>
			<div>
				<p className='font-semibold text-3xl mb-5'>Destinatarios</p>
				<hr className='w-[7%] lg:w-[5%] xl:w-[3%] ' />
			</div>
			<div className='flex justify-between items-center'>
				<form>
					<InputSearch
						Icon={<AiOutlineSearch />}
						name='search'
						placeholder='Buscar'
						register={register}
					
					/>
					
				</form>
				<CreateAddresseeModal />
			</div>
			<TableAddressee />
		</div>
	)
}
