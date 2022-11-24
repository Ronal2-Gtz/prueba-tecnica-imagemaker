import { Button, InputSearch } from '../../components'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { AiOutlineSearch } from 'react-icons/ai'
import { useEffect, useMemo, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useDispatch'
import { Input } from '../../components/input/index'
import { getLastMovThunk } from '../../store/lastMov/lastMovThunk'
import { LastMovAccessors, columns } from './columns'
import { Table } from 'antd'
import dayjs from 'dayjs'
import {
	copyLastMovList,
	filterByDate,
	filterLastMov,
} from '../../store/lastMov/lastMovSlice'

export const LastMov = (): React.ReactElement => {
	const dispatch = useAppDispatch()
	const { lastMovFilter } = useAppSelector((state) => state.lastMovList)
	const { register, handleSubmit, watch } = useForm()
	const search = watch('search')

	const debounceRef = useRef<NodeJS.Timeout>()

	const tableData = lastMovFilter.map<LastMovAccessors>((item) => {
		return {
			key: item.id,
			date: dayjs(item.date).format('DD MMM, YYYY'),
			description: item.description,
			operationNumber: item.operationRef,
			amount: item.amount,
			balance: item.balance,
		}
	})

	const handleFilter: SubmitHandler<FieldValues> = (data) => {
		if (data.start && data.end) {
			return dispatch(filterByDate({ start: data.start, end: data.end }))
		}
		dispatch(copyLastMovList())
	}

	const table = useMemo(
		() => <Table columns={columns} dataSource={tableData} />,
		[tableData]
	)

	useEffect(() => {
		dispatch(getLastMovThunk())
	}, [dispatch])

	useEffect(() => {
		if (debounceRef.current) clearTimeout(debounceRef.current)

		debounceRef.current = setTimeout(() => {
			dispatch(filterLastMov(search))
		}, 500)
	}, [search])

	return (
		<div className='w-9/12 h-full m-auto mt-10 '>
			<div>
				<p className='font-semibold text-sm'>Cuentas</p>
				<p className='font-semibold text-3xl '>Ultimos Movimientos</p>
				<hr className='w-[7%] lg:w-[5%] xl:w-[3%] mt-5 ' />
			</div>
			<form
				onSubmit={handleSubmit(handleFilter)}
				className='w-full  grid grid-cols-12 items-end  md:gap-7 mb-14'
			>
				<div className='col-span-3'>
					<InputSearch
						Icon={<AiOutlineSearch />}
						name='search'
						placeholder='Buscar'
						register={register}
					/>
				</div>
				<div className='col-span-3'>
					<Input
						register={register}
						name='start'
						placeholder='YYYY/MM/DD'
						label='Inicio'
						type='date'
					/>
				</div>
				<div className='col-span-3'>
					<Input
						register={register}
						name='end'
						placeholder='YYYY/MM/DD'
						label='Fin'
						type='date'
					/>
				</div>
				<div className='col-span-3'>
					<Button type='submit'>Filtrar</Button>
				</div>
			</form>
			{table}
		</div>
	)
}
