import { Popconfirm, Tooltip } from 'antd'
import { AiOutlineDelete } from 'react-icons/ai'
import { useAppDispatch } from '../../../../hooks/useDispatch'
import { deleteAddresseeThunks } from '../../../../store/addressee/thunksAddressee'

type ActionsProps = {
	id: string
}

export const Actions = ({ id }: ActionsProps): React.ReactElement => {
	const dispatch = useAppDispatch()

	return (
		<div className='flex items-center gap-x-3'>
			<Tooltip title={'Eliminar'} placement='bottom'>
				<Popconfirm
					title={`¿Seguro de que desea eliminar el destinatario? `}
					onConfirm={() => {
						void dispatch(deleteAddresseeThunks(id))
					}}
					okText='Eliminar'
					cancelText='No'
					okType='text'
				>
					<button>
						<AiOutlineDelete size={20} />
					</button>
				</Popconfirm>
			</Tooltip>
		</div>
	)
}
