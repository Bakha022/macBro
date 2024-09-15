// import React, { lazy, Suspense } from 'react'
import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AirPods from './pages/AirPods'
import Cart from './pages/Cart'
import Home from './pages/Home'
import IPad from './pages/iPad'
import IPhone from './pages/iPhone'
import MacBook from './pages/MacBook'
import NotFound from './pages/NotFound'

// const Layout = lazy(() => import('./components/Layout'))
// const AirPods = lazy(() => import('./pages/AirPods'))
// const Cart = lazy(() => import('./pages/Cart'))
// const Home = lazy(() => import('./pages/Home'))
// const IPad = lazy(() => import('./pages/iPad'))
// const IPhone = lazy(() => import('./pages/iPhone'))
// const MacBook = lazy(() => import('./pages/MacBook'))
// const NotFound = lazy(() => import('./pages/NotFound'))

// import LoadingComponent from './components/loading/LoadingComponent'

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
		// <Suspense fallback={<LoadingComponent />}>
		// 	<BrowserRouter>
		// 		<Routes>
		// 			<Route element={<Layout />}>
		// 				<Route index element={<Home />} />
		// 				<Route path='/macbook' element={<MacBook />} />
		// 				<Route path='/iphone' element={<IPhone />} />
		// 				<Route path='/ipad' element={<IPad />} />
		// 				<Route path='/airpods' element={<AirPods />} />
		// 				<Route path='/cart' element={<Cart />} />
		// 			</Route>
		// 			<Route path='*' element={<NotFound />} />
		// 		</Routes>
		// 	</BrowserRouter>
		// </Suspense>
	)
}

export default App
