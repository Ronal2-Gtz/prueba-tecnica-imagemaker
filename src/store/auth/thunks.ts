import { AuthService } from "../../service/loginService"
import { checkingCredentials, login, logout } from "./authSlice"
import { AppDispatch } from '../store';

type Company = {
    companyRut: string
    userRut: string
    password: string
}

export const checkingAutentication = ({userRut,password, companyRut}:Company) => {
    return async (dispatch: AppDispatch) => {
        dispatch(checkingCredentials())
        const company = await AuthService({userRut, password, companyRut})
        if (company[0]) {
            return dispatch(login(company[0]))
        }

        return dispatch(logout('Error de autenticacion'))

    }
}


