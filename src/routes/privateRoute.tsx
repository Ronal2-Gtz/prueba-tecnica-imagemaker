import { useMemo } from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/useDispatch'

type PrivateRouteProps = {
	children: React.ReactElement
}

export const PrivateRoute = ({
	children,
}: PrivateRouteProps): React.ReactElement => {
	const { status } = useAppSelector((state) => state.auth)

	const isAuthenticating = useMemo(() => status === 'authenticated', [status])

	return isAuthenticating ? children : <Navigate to='/login' />
}
