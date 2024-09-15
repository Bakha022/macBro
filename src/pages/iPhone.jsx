import React from 'react'

import ProductItemsComponent from '../components/productItems/ProductItemsComponent'

import iPhone from '../utils/iphone.db'

const Iphone = () => {
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

export default Iphone
