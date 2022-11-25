import { AuthService } from '../../services/loginService'
import { checkingCredentials, login, logout } from './authSlice'
import { AppDispatch } from '../store'

type Company = {
	companyRut: string
	userRut: string
	password: string
}

export const checkingAutentication = ({
	userRut,
	password,
	companyRut,
}: Company) => {
	return async (dispatch: AppDispatch) => {
		dispatch(checkingCredentials())
		const company = await AuthService({ userRut, password, companyRut })
		if (company[0]) {
			localStorage.setItem(
				'user',
				JSON.stringify({ ...company[0], status: 'authenticated' })
			)
			return dispatch(login(company[0]))
		}

		return dispatch(logout('Error de autenticacion'))
	}
}
