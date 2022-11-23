import { DeleteAddressee, GetAddressee } from "../../services/addresseeService"
import { AppDispatch } from "../store"
import { addAddresseeList, deleteAddressee } from "./addresseeSlice"

 const getAddresseeThunks = () => {
    return async (dispatch: AppDispatch) => {
        const addresseeList = await GetAddressee()
        dispatch(addAddresseeList(addresseeList.data))
        // dispatch(allAddresseeList())
        
    }
}

const deleteAddresseeThunks = (id:string) => {
    return async (dispatch: AppDispatch) => {
        await DeleteAddressee(id) 
        dispatch(deleteAddressee(id))
    }

}

export {getAddresseeThunks, deleteAddresseeThunks}