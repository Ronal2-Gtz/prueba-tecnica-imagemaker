import { TableColumnsType } from 'antd'
import { Actions } from './actions'

type AddresseeAccessors = {
	key: React.Key
	name: string
	alias: string
	bank: string
	account: string
}

export const columns: TableColumnsType<AddresseeAccessors> = [
	{
		title: 'Rut',
		dataIndex: 'name',
		key: 'name',
		sorter: true,
	},
	{
		title: 'Nombre',
		dataIndex: 'name',
		key: 'name',
		sorter: true,
	},
	{
		title: 'Alias',
		dataIndex: 'alias',
		key: 'alias',
		sorter: true,
	},
	{
		title: 'Banco',
		dataIndex: 'bank',
		key: 'bank',
		sorter: true,
	},
	{
		title: 'Cuenta',
		dataIndex: 'account',
		key: 'account',
		sorter: true,
	},
    {
		title: 'Acciones',
		dataIndex: 'action',
		render: Actions,
	},
]

export type { AddresseeAccessors }
