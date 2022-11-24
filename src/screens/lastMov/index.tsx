import { Button, InputSearch } from '../../components'
import { useForm } from 'react-hook-form'
import { AiOutlineSearch } from 'react-icons/ai'
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useDispatch';
import { Input } from '../../components/input/index';
import { getLastMovThunk } from '../../store/lastMov/lastMovThunk'
import { LastMovAccessors, columns } from './columns';
import { Table } from 'antd';
import dayjs from 'dayjs'

export const LastMov = (): React.ReactElement => {
	const dispatch = useAppDispatch()
	const { lastMovList } = useAppSelector((state) => state.lastMovList)
	const { register } = useForm()
	
	const tableData = lastMovList.map<LastMovAccessors>((item) => {
		return {
			key: item.id,
			date: dayjs(item.date).format('DD MMM, YYYY'),
			description: item.description,
			operationNumber: item.operationRef,
			amount: item.amount,
			balance: item.balance
		}
	})

	const table = useMemo(() => <Table columns={columns} dataSource={tableData} />, [tableData])

	useEffect(() => {
		dispatch(getLastMovThunk())
	}, [dispatch])

	return (
		<div className='w-9/12 h-full m-auto mt-10 '>
			<div>
				<p className='font-semibold text-sm'>Cuentas</p>
				<p className='font-semibold text-3xl '>Ultimos Movimientos</p>
				<hr className='w-[7%] lg:w-[5%] xl:w-[3%] mt-5 ' />
			</div>
				<form className='flex justify-between items-end mb-14'> 
					<InputSearch
						Icon={<AiOutlineSearch />}
						name='search'
						placeholder='Buscar'
						register={register}
					/>
					<Input register={register} name="start" placeholder='YYYY/MM/DD' label='Inicio'/>
					<Input register={register} name="end" placeholder='YYYY/MM/DD' label='Fin'/>
					
					<Button>Filtrar</Button>
				</form>
			{table}
		</div>
	)
}
