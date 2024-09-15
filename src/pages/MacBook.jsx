import React, { useEffect, useState } from 'react'
import ProductItemsComponent from '../components/productItems/ProductItemsComponent'

import LoadingComponent from '../components/loading/LoadingComponent'
import mac from '../constants/mac.db'

const MacBook = () => {
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
					{mac.map(({ id, discount, title, price, img }) => (
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

	// return (
	// 	<div className='container'>
	// 		<div className='row'>
	// 			{mac.map(({ id, discount, title, price, img }) => (
	// 				<ProductItemsComponent
	// 					key={id}
	// 					id={id}
	// 					discount={discount}
	// 					title={title}
	// 					price={price}
	// 					img={img}
	// 				/>
	// 			))}
	// 		</div>
	// 	</div>
	// )
}

export default MacBook
