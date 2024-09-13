import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './ButtonComponent.module.css'

const ButtonComponent = ({ props, link }) => {
	return (
		<button className={style['button-component']}>
			<NavLink to={`${link ? link : ''}`}>{props}</NavLink>
		</button>
	)
}

export default ButtonComponent
