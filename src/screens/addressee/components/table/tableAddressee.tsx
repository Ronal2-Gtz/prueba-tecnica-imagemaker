import { useAppSelector } from '../../../../hooks/useDispatch'
import { AddresseeAccessors, columns } from './columns'
import { useMemo } from 'react'
import { Table } from 'antd'

export const TableAddressee = (): React.ReactElement => {
	const { addresseeList } = useAppSelector((state) => state.addresseeList)
	const tableData = addresseeList.map<AddresseeAccessors>((item) => {
		return {
			key: item?.id,
			name: item?.name,
			alias: item?.alias,
			bank: item?.detail?.bank_name,
			account: item?.detail?.acc_numbr,
			action: { id: item.id },
		}
	})

	const table = useMemo(
		() => <Table columns={columns} pagination={false} dataSource={tableData} />,
		[addresseeList]
	)

	return <>{table}</>
}
