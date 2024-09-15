import React, { useEffect, useState } from 'react'

import LoadingComponent from '../components/loading/LoadingComponent'
import ProductItemsComponent from '../components/productItems/ProductItemsComponent'
import iPad from '../constants/iPad.db'

const Ipad = () => {
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
					{iPad.map(({ id, discount, title, price, img }) => (
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
	// 			{iPad.map(({ id, discount, title, price, img }) => (
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

export default Ipad
