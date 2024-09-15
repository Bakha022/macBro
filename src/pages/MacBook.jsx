import React from 'react'
import ProductItemsComponent from '../components/ProductItems/ProductItemsComponent'

import mac from '../constants/mac.db'

const MacBook = () => {
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

export default MacBook
