import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaTrashAlt } from 'react-icons/fa'
import LoadingComponent from '../components/loading/LoadingComponent'

const Cart = () => {
	const [call, setCall] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setCall(true)
		}, 200)
	})
	if (call) {
		return (
			<div className='container'>
				<div className='row-cart'>
					<div className='col'>
						<div className='col-titles'>
							<p className='action'>Discount 9%</p>
							<h2 className='col-title'>MacBook</h2>
							<p className='action-calc'>
								<del>$1350</del> <FaArrowRight /> ${1350 * 0.91}{' '}
							</p>
							<button className='detete-btn'>
								<FaTrashAlt />
							</button>
						</div>
						<div className='col-img'>
							<img src='./mac/mac_4.png' alt='mac' />
						</div>
					</div>
					<div className='col'>
					<div className='col-titles'>
							<p className='action'>Discount 9%</p>
							<h2 className='col-title'>MacBook</h2>
							<p>
								<del>$1350</del> <FaArrowRight /> ${1350 * 0.91}{' '}
							</p>
							<FaTrashAlt />
						</div>
						<div className='col-img'>
							<img src='./mac/mac_4.png' alt='mac' />
						</div>
					</div>
				</div>
			</div>
		)
	}

	return <LoadingComponent />

	// return <div>Cart</div>
}

export default Cart
