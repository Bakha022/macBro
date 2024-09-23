import React from 'react'

import { FaTrashAlt } from 'react-icons/fa'
import style from './CartItemComponent.module.css'

const CartItemComponent = () => {
	return (
		<>
			<div className={style['col']}>
				<div className={style['col-left']}>
					<div className={style['col-img']}>
						<img src='./mac/mac_4.png' alt='mac' />
					</div>
					<div className={style['col-titles']}>
						<p className={style['action']}>Discount 9%</p>
						<h2 className={style['col-title']}>MacBook</h2>
						<del className={style['del-price']}>$1350</del>
					</div>
				</div>
				<div className={style['col-right']}>
					<div className={style['counters']}>
						<button className={style['decrement-btn']}>-</button>
						<p className={style['count']}>0</p>
						<button className={style['increment-btn']}>+</button>
					</div>
					<button className={style['detete-btn']}>
						<FaTrashAlt
							className={style['trash-icon']}
							color='white'
							size={20}
						/>
					</button>
					<p className={style['action-calc']}>${1350 * 0.91} </p>
				</div>
			</div>
		</>
	)
}

export default CartItemComponent
