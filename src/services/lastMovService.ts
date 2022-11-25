import axios from 'axios'

const BASE_PATH = 'http://localhost:3004'

type LastMovResponse = Array<{
	id: string
	date: string
	dateTime: string
	description: string
	operationRef: string
	amount: string
	balance: string
	custName: string
	trnType: string
	trnTypetrnCreditDebit: string
	trnCode: string
	office: string
	correlative: string
}>

const getlastMov = async (): Promise<any> => {
	try {
		const { data } = await axios.get<LastMovResponse>(`${BASE_PATH}/lastmov`)
		return { data, ok: true }
	} catch (error) {
		return { ok: false, error }
	}
}

export { getlastMov }
export type { LastMovResponse }
