import { Popconfirm, Tooltip } from 'antd'
import { AiOutlineDelete } from 'react-icons/ai'

type ActionsProps = {
	id: string
	setId: React.Dispatch<React.SetStateAction<string>>
}

export const Actions = ({ setId, id }: ActionsProps): React.ReactElement => {
	return (
		<div className='flex items-center gap-x-3'>
			<Tooltip title={'Eliminar'} placement='bottom'>
				<Popconfirm
					title={`¿Seguro de que desea eliminar el destinatario? `}
					onConfirm={() => setId(id)}
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
