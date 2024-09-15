import React from 'react'

import ProductItemsComponent from '../components/productItems/ProductItemsComponent'
import iPad from '../utils/iPad.db'

const Ipad = () => {
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

export default Ipad
