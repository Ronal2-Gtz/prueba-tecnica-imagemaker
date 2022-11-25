import { TableColumnsType } from 'antd'

type LastMovAccessors = {
	key: React.Key
	date: string
	description: string
	operationNumber: string
	amount: string
	balance: string
}

export const columns: TableColumnsType<LastMovAccessors> = [
	{
		title: 'Fecha',
		dataIndex: 'date',
		key: 'date',
		sorter: true,
	},
	{
		title: 'Descripcíon',
		dataIndex: 'description',
		key: 'description',
		sorter: true,
	},
	{
		title: 'N° Operacion',
		dataIndex: 'operationNumber',
		key: 'operationNumber',
		sorter: true,
	},
	{
		title: 'Monto',
		dataIndex: 'amount',
		key: 'amount',
		sorter: true,
		render: (amount) => (
			<span className={`${amount < 0 ? 'text-primary' : ''}`}>{amount}</span>
		),
	},
	{
		title: 'Saldo',
		dataIndex: 'balance',
		key: 'balance',
		sorter: true,
		render: (balance) => (
			<span className={`${balance < 0 ? 'text-primary' : ''}`}>{balance}</span>
		),
	},
]

export type { LastMovAccessors }
