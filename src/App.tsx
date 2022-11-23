import { AppRouter } from './routes/appRouter'

const App = (): React.ReactElement => {
	return (
		<div className='h-screen w-full'>
			<AppRouter />
		</div>
	)
}

export default App
