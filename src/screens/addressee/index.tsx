import { InputSearch } from '../../components'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { AiOutlineSearch } from 'react-icons/ai'
import { CreateAddresseeModal } from './components/createAddresseeModal'
import { Table } from 'antd'

const dataSource: readonly any[] | undefined = [
]

const columns = [
	{
		title: 'Rut',
		dataIndex: 'name',
		key: 'name',
		sorter: true,
	},
	{
		title: 'Nombre',
		dataIndex: 'age',
		key: 'age',
		sorter: true,
	},
	{
		title: 'Alias',
		dataIndex: 'address',
		key: 'address',
		sorter: true,
	},
	{
		title: 'Banco',
		dataIndex: 'address',
		key: 'address',
		sorter: true,
	},
	{
		title: 'Cuenta',
		dataIndex: 'address',
		key: 'address',
		sorter: true,
	},
]

export const Addressee = (): React.ReactElement => {
	const { register, handleSubmit } = useForm()

	const onSearch: SubmitHandler<FieldValues> = (data) => {
		console.log(data)
	}

	return (
		<div className='flex flex-col justify-center gap-y-10 w-9/12 h-full m-auto '>
			<div>
				<p className='font-semibold text-3xl mb-5'>Destinatarios</p>
				<hr className='w-[7%] lg:w-[5%] xl:w-[3%] ' />
			</div>
			<div className='flex justify-between items-center'>
				<form onSubmit={handleSubmit(onSearch)}>
					<InputSearch
						Icon={<AiOutlineSearch />}
						name='search'
						placeholder='Buscar'
						register={register}
					/>
				</form>
				<CreateAddresseeModal />
			</div>
			<Table dataSource={dataSource} columns={columns} />
		</div>
	)
}
