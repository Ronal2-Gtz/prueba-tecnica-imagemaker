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
import { Navbar } from '../components/navbar/index'
import { Addressee } from '../screens/addressee/index';
import { ADDRESSEE, LAST_MOV, LOGIN } from './paths'

export const AppRouter = (): React.ReactElement => {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route
						path={`${LOGIN}/*`}
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
									<Route path={LAST_MOV} element={<LastMov />} />
									<Route path={ADDRESSEE} element={<Addressee />} />
									<Route path='*' element={<Navigate to={LAST_MOV} />} />
								</Routes>
							</PrivateRoute>
						}
					/>
				</Routes>
			</div>
		</Router>
	)
}
