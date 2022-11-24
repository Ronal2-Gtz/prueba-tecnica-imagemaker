import { InputSearch } from '../../components'
import { useForm } from 'react-hook-form'
import { AiOutlineSearch } from 'react-icons/ai'
import { CreateAddresseeModal } from './components/createAddresseeModal'
import { useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useDispatch'
import {
	deleteAddresseeThunks,
	getAddresseeThunks,
} from '../../store/addressee/AddresseeThunk'
import { AddresseeAccessors, columns } from './components/table/columns'

import { Table } from 'antd'

export const Addressee = (): React.ReactElement => {
	const [id, setId] = useState('')
	const { addresseeList } = useAppSelector((state) => state.addresseeList)
	const dispatch = useAppDispatch()
	const { register } = useForm()

	const tableData = addresseeList.map<AddresseeAccessors>((item) => {
		return {
			key: item?.id,
			name: item?.name,
			alias: item?.alias,
			bank: item?.detail?.bank_name,
			account: item?.detail?.acc_numbr,
			action: { id: item.id, setId },
		}
	})

	useEffect(() => {
		dispatch(getAddresseeThunks())
	}, [dispatch])

	useEffect(() => {
		if (id) {
			dispatch(deleteAddresseeThunks(id))
		}
	}, [id, dispatch])

	const table = useMemo(
		() => <Table columns={columns} pagination={false} dataSource={tableData} />,
		[tableData]
	)

	return (
		<div className='w-9/12 h-full m-auto mt-10'>
			<div>
				<p className='font-semibold text-3xl mb-5'>Destinatarios</p>
				<hr className='w-[7%] lg:w-[5%] xl:w-[3%] ' />
			</div>
			<div className='flex justify-between items-center mt-10 mb-10'>
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
			{table}
		</div>
	)
}
