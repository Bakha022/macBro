import React from 'react'

import { FaArrowRight } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'

import style from './ProductItems.module.css'

const MacItemsComponent = props => {
	const { id, title, discount, price, img, width } = props

	const discountCalc = price * ((100 - discount) / 100)
	
	return (
		<>
			<div className={style['col-3']}>
				<div className={style['card']}>
					<span className={style['action']}>Discount {discount}%</span>
					<div className={style['card-img']}>
						<img style={{width: `${width ? width : ''}`}} src={img} alt='mac-img' />
					</div>
					<p className={style['mac-title']}>{title}</p>
					<p className={style['action-calc']}>
						<del>${price}</del> <FaArrowRight /> ${Math.round(discountCalc)}{' '}
					</p>
				</div>
				<button className={style['mac-sell-btn']}>
					Add to
					<IoCart size={20} />
				</button>
			</div>
		</>
	)
}

export default MacItemsComponent
