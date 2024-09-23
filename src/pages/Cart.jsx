import React, { useEffect, useState } from 'react'
import CartItemComponent from '../components/cartitem/CartItemComponent'
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
					<CartItemComponent />
				</div>
			</div>
		)
	}

	return <LoadingComponent />
}

export default Cart
