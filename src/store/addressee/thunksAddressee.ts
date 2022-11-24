import {
	AddAddressee,
	AddresseeParams,
	DeleteAddressee,
	GetAddressee,
} from '../../services/addresseeService'
import { AppDispatch } from '../store'
import {
	addAddresseeSlice,
	addAddresseeList,
	deleteAddressee,
} from './addresseeSlice'

const getAddresseeThunks = () => {
	return async (dispatch: AppDispatch) => {
		const addresseeList = await GetAddressee()
		dispatch(addAddresseeList(addresseeList.data))
	}
}

const deleteAddresseeThunks = (id: string) => {
	return async (dispatch: AppDispatch) => {
		await DeleteAddressee(id)
		dispatch(deleteAddressee(id))
	}
}

const addAddresseeThunks = (addAddresseeData: AddresseeParams) => {
	return async (dispatch: AppDispatch) => {
		await AddAddressee(addAddresseeData)
		dispatch(addAddresseeSlice(addAddresseeData))
	}
}

export { getAddresseeThunks, deleteAddresseeThunks, addAddresseeThunks }
