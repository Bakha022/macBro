import React from 'react'

import ProductItemsComponent from '../components/productItems/ProductItemsComponent'
import airpods from '../utils/airpods.db'

const AirPods = () => {
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
						width={"120px"}
					/>
				))}
			</div>
		</div>
	)
}

export default AirPods
