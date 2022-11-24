import {
	addAddressee,
	AddresseeParams,
	deleteAddressee,
	getAddressee,
} from '../../services/addresseeService'
import { AppDispatch } from '../store'
import {
	addAddresseeSlice,
	addAddresseeList,
	removeAddressee,
} from './addresseeSlice'

const getAddresseeThunks = () => {
	return async (dispatch: AppDispatch) => {
		const addresseeList = await getAddressee()
		dispatch(addAddresseeList(addresseeList.data))
	}
}

const deleteAddresseeThunks = (id: string) => {
	return async (dispatch: AppDispatch) => {
		await deleteAddressee(id)
		dispatch(removeAddressee(id))
	}
}

const addAddresseeThunks = (addAddresseeData: AddresseeParams) => {
	return async (dispatch: AppDispatch) => {
		await addAddressee(addAddresseeData)
		dispatch(addAddresseeSlice(addAddresseeData))
	}
}

export { getAddresseeThunks, deleteAddresseeThunks, addAddresseeThunks }
