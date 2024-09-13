import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AirPods from './pages/AirPods'
import { Cart } from './pages/Cart'
import Home from './pages/Home'
import IPad from './pages/iPad'
import IPhone from './pages/iPhone'
import MacBook from './pages/MacBook'
import NotFound from './pages/NotFound'

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
					<Route path='/cart' element={<Cart />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>

		// <Layout/>
	)
}

export default App
