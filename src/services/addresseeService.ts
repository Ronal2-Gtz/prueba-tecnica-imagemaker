import axios from 'axios'

type Detail = {
    currency: string
    acc_numbr: string
    adr_email: string
    bank_id: string
    bank_name: string
    acc_type: string
    branch_id: string
}

type AddresseeResponse = Array<{
    id: string
    rut: string
    name: string
    alias: string
    detail: Detail,
    customerID: string
    type: string
}>

const GetAddressee = async (): Promise<any> => {
    try {
        const { data } = await axios.get<AddresseeResponse>('http://localhost:3004/addressee')
        return { data, ok: true }
    } catch (error) {
        return { ok: false, error }
    }
}

const DeleteAddressee = async (addresseeId: string): Promise<any> => {
    try {
        const { data } = await axios.delete(`http://localhost:3004/addressee/${addresseeId}`)
        return { data, ok: true }
    } catch (error) {
        return { ok: false, error }
    }
}

export { GetAddressee, DeleteAddressee }

export type { AddresseeResponse }