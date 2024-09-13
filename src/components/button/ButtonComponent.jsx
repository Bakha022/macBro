import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './ButtonComponent.module.css'

const ButtonComponent = () => {
	return (
		<button className={style['button-component']}>
			<NavLink to={'/'}>Go Home</NavLink>
		</button>
	)
}

export default ButtonComponent
