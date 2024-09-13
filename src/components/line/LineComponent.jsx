import React from 'react'

import style from './Line.module.css'

const LineComponent = ({widths, heights}) => {
	return (
		<div className={style['line']} style={{width:`${widths}px`, height:`${heights}px`}}></div>
	)
}
export default LineComponent