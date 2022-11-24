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
	allAddresseeList,
} from './addresseeSlice'

const getAddresseeThunks = () => {
	return async (dispatch: AppDispatch) => {
		const addresseeList = await getAddressee()
		dispatch(addAddresseeList(addresseeList.data))
		dispatch(allAddresseeList())
	}
}

const deleteAddresseeThunks = (id: string) => {
	return async (dispatch: AppDispatch) => {
		await deleteAddressee(id)
		dispatch(removeAddressee(id))
		dispatch(allAddresseeList())
	}
}

const addAddresseeThunks = (addAddresseeData: AddresseeParams) => {
	return async (dispatch: AppDispatch) => {
		await addAddressee(addAddresseeData)
		dispatch(addAddresseeSlice(addAddresseeData))
		dispatch(allAddresseeList())
	}
}

export { getAddresseeThunks, deleteAddresseeThunks, addAddresseeThunks }
