import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/useDispatch'
import { useMemo } from 'react'

type PrivateRouteProps = {
	children: React.ReactElement
}

export const PublicRoute = ({
	children,
}: PrivateRouteProps): React.ReactElement => {
	const { status } = useAppSelector((state) => state.auth)
	const isAuthenticating = useMemo(
		() => status === 'not-authenticated',
		[status]
	)

	return isAuthenticating ? children : <Navigate to='/lastMov' />
}
