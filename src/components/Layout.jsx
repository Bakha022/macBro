// import React, { Fragment } from 'react'

// const Layout = () => {
// 	return (
// 		<Fragment>
// 			<Navbar>
// 			<Outlet/>
// 			<Footer/>
// 		<Fragment/>
// 	)
// }

// export default Layout

import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
const Layout = () => {
	return (
		<Fragment>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</Fragment>
	)
}

export default Layout
