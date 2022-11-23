import axios from 'axios'

type Company = {
	companyRut: string
	userRut: string
	password: string
}

type AuthResponse = {
	user: string
	pass: string
	id: string
}

export const AuthService = async ({
	userRut,
	password,
}: Company): Promise<any> => {
	try {
		const { data } = await axios.get<AuthResponse>(
			'http://localhost:3004/login',
			{
				params: { user: userRut, pass: password },
			}
		)
		return { ...data, ok: true }
	} catch (error) {
		return { ok: false, error }
	}
}
