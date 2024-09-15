import React, { useEffect, useState } from 'react'
import LoadingComponent from '../components/loading/LoadingComponent'

const Cart = () => {
	const [call, setCall] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setCall(true)
		}, 200)
	})
	if (call) {
		return <div>Cart</div>
	}

	return <LoadingComponent />

	// return <div>Cart</div>
}

export default Cart
