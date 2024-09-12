import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='not-found-page'>
			<h1 className='not-found-page-title'>404</h1>
			<p className='not-found-page-subtitle'>Page Not Found</p>
			<button className='not-found-btn'>
				<NavLink to={'/'}>Go Home</NavLink>
			</button>
		</div>
	)
}

export default NotFound
