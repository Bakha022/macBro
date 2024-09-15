import React, { useEffect, useState } from 'react'

import ProductItemsComponent from '../components/ProductItems/ProductItemsComponent'

import LoadingComponent from '../components/loading/LoadingComponent'
import iPhone from '../constants/iphone.db'

const Iphone = () => {
	const [call, setCall] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setCall(true)
		}, 200)
	})
	if (call) {
		return (
			<div className='container'>
				<div className='row'>
					{iPhone.map(({ id, discount, title, price, img }) => (
						<ProductItemsComponent
							key={id}
							id={id}
							discount={discount}
							title={title}
							price={price}
							img={img}
						/>
					))}
				</div>
			</div>
		)
	}

	return <LoadingComponent />
}

export default Iphone
