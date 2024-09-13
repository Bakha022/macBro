import React from 'react'

import style from './TitleComponent.module.css'

const TitleComponent = ({title, size}) => {
	return (
		<>
			<h1 style={{fontSize: `${size}px`}} className={style['title-before']}>{title}</h1>
		</>
	)
}

export default TitleComponent
