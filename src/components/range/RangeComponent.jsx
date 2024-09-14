import React from 'react'



import style from './RangeComponent.module.css'

const RangeComponent = ({title, subtitle, lenght}) => {
	return (
		<div className={style['tab-items']}>
			<h3 className={style['character-title']}>{title}</h3>
			<div className={style['tab-item-line']} style={{width: `${lenght}`}}></div>
			<p id='hello' className={style['character-subtitle']}>
				{subtitle}
			</p>
		</div>
	)
}

export default RangeComponent
