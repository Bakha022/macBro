import React from 'react'

import ButtonComponent from '../button/ButtonComponent'

import style from './HeroItem.module.css'
import LineComponent from '../line/LineComponent'

const HeroItemComponent = ({props}) => {
	const {className, title, img} = props
	return (
		<>
			<h1 className={style['hero-title']}>{title}</h1>
			<LineComponent heights={5} widths={80}/>
			<p className={style['hero-subtitle']}>
				The modern technologies with sufficient conditions just buy it because
				we are apple and you need to buy
			</p>
			<div className={style['hero-img']}>
				<img className={`${style[`${className ? className : ''}`]}`} src={img} alt='hero-img' />
			</div>
			<ButtonComponent props={'Add Cart'} />
		</>
	)
}

export default HeroItemComponent
