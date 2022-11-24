import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { ADDRESSEE, LAST_MOV } from '../../routes/paths'
import { useAppDispatch, useAppSelector } from '../../hooks/useDispatch'
import { logout } from '../../store/auth/authSlice'
import { useMemo } from 'react'

export const Navbar = (): React.ReactElement => {
	const { status } = useAppSelector((state) => state.auth)
	const dispatch = useAppDispatch()

	const handleLogout = (): void => {
		dispatch(logout(''))
		localStorage.clear()
	}

	const isAuthenticating = useMemo(() => status === 'authenticated', [status])

	return (
		<header>
			<nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-md h-16 '>
				<div className='flex flex-wrap justify-between items-center w-full mx-auto max-w-screen-xl'>
					<Link to={'/'} className='flex items-center'>
						<span className='self-center text-xl font-semibold whitespace-nowrap '>
							Imagemaker
						</span>
					</Link>
					{isAuthenticating ? (
						<div className='flex items-center lg:order-2'>
							<Link
								to={LAST_MOV}
								className=' focus:ring-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2'
							>
								Ultimos movimientos
							</Link>
							<Link
								to={ADDRESSEE}
								className=' focus:ring-gray-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 '
							>
								Destinatarios
							</Link>
							<Button
								type='primary'
								onClick={handleLogout}
								className='text-white bg-primary hover:bg-primary font-medium rounded-lg text-sm px-4  mr-2 dark:bg-primary-600'
							>
								Cerrar sesión
							</Button>
						</div>
					) : null}
				</div>
			</nav>
		</header>
	)
}
