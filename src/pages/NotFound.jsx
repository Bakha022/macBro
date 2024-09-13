import React from 'react'
import ButtonComponent from '../components/button/ButtonComponent'

const NotFound = () => {
	return (
		<div className='not-found-page'>
			<h1 className='not-found-page-title'>404</h1>
			<p className='not-found-page-subtitle'>Page Not Found</p>
			<ButtonComponent />
		</div>
	)
}

export default NotFound
