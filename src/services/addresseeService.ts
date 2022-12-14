import axios from 'axios'

const BASE_PATH = 'http://localhost:3004'

type Detail = {
	currency: string
	acc_numbr: string
	adr_email: string
	bank_id: string
	bank_name: string
	acc_type?: string
	branch_id?: string
}

type AddresseeResponse = Array<{
	id: string
	rut: string
	name: string
	alias: string
	detail: Detail
	customerID: string
	type: string
}>

const getAddressee = async (): Promise<any> => {
	try {
		const { data } = await axios.get<AddresseeResponse>(
			`${BASE_PATH}/addressee`
		)
		return { data, ok: true }
	} catch (error) {
		return { ok: false, error }
	}
}

type AddresseeParams = {
	rut: string
	name: string
	alias: string
	detail: {
		currency: string
		acc_numbr: string
		adr_email: string
		bank_id: string
		bank_name: string
	}
}

const addAddressee = async (addressee: AddresseeParams): Promise<any> => {
	try {
		const { data } = await axios.post(`${BASE_PATH}/addressee`, addressee)
		return { data, ok: true }
	} catch (error) {
		return { ok: false, error }
	}
}

const deleteAddressee = async (addresseeId: string): Promise<any> => {
	try {
		const { data } = await axios.delete(`${BASE_PATH}/addressee/${addresseeId}`)
		return { data, ok: true }
	} catch (error) {
		return { ok: false, error }
	}
}

export { getAddressee, deleteAddressee, addAddressee }

export type { AddresseeResponse, AddresseeParams }
