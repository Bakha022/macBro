import React, { useEffect, useState } from 'react'

import LoadingComponent from '../components/loading/LoadingComponent'
import ProductItemsComponent from '../components/ProductItems/ProductItemsComponent'
import airpods from '../constants/airpods.db'

const AirPods = () => {
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
					{airpods.map(({ id, discount, title, price, img }) => (
						<ProductItemsComponent
							key={id}
							id={id}
							discount={discount}
							title={title}
							price={price}
							img={img}
							width={'90px'}
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
	// 			{airpods.map(({ id, discount, title, price, img }) => (
	// 				<ProductItemsComponent
	// 					key={id}
	// 					id={id}
	// 					discount={discount}
	// 					title={title}
	// 					price={price}
	// 					img={img}
	// 					width={'90px'}
	// 				/>
	// 			))}
	// 		</div>
	// 	</div>
	// )
}

export default AirPods
