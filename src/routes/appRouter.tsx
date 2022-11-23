import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom'
import { Login } from '../screens'

import { PublicRoute } from './publicRoute'
import { PrivateRoute } from './privateRoute'
import { LastMov } from '../screens/lastMov'

export const AppRouter = (): React.ReactElement => {
	return (
		<Router>
			<Routes>
				<Route
					path='login/*'
					element={
						<PublicRoute>
							<Routes>
								<Route path='/*' element={<Login />} />
							</Routes>
						</PublicRoute>
					}
				/>

				<Route
					path='/*'
					element={
						<PrivateRoute>
							<Routes>
								<Route path='/lastMov' element={<LastMov />} />
								<Route path='*' element={<Navigate to='/lastMov' />} />
							</Routes>
						</PrivateRoute>
					}
				/>
			</Routes>
		</Router>
	)
}
