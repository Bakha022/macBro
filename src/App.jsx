import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AirPods from './pages/AirPods'
import Home from './pages/Home'
import IPad from './pages/iPad'
import IPhone from './pages/iPhone'
import MacBook from './pages/MacBook'

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/macbook' element={<MacBook />} />
					<Route path='/iphone' element={<IPhone />} />
					<Route path='/ipad' element={<IPad />} />
					<Route path='/airpods' element={<AirPods />} />
				</Route>
			</Routes>
		</BrowserRouter>

		// <Layout/>
	)
}

export default App
