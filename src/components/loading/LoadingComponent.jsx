import React from 'react'

import style from './LoadingComponent.module.css'
const LoadingComponent = () => {
	return (
		<div className={style['loadingPage']}>
			<div className={style['loading-img']}>
				<img src='./apple.svg' alt='app-logo' />
			</div>
		</div>
	)
}

export default LoadingComponent
