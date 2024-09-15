import React from 'react'

import img from '../assets/mac/mac_4.png'
const MacBook = () => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-3'>
					<div className='card'>
						<span className='action'>9%</span>
						<div className='card-img'>
							<img src={img} alt='mac-img' />
						</div>
						<p>MacBook Pro</p>
					</div>
					<p className='hello-text'>
						Add to Cart
					</p>
				</div>
				<div className='col-3'>
					<div className='card'>
						<span className='action'>9%</span>
						<div className='card-img'>
							<img src={img} alt='mac-img' />
						</div>
						<p>MacBook Pro</p>
					</div>
					<p className='hello-text'>
						Add to Cart
					</p>
				</div>
				<div className='col-3'>
					<div className='card'>
						<span className='action'>9%</span>
						<div className='card-img'>
							<img src={img} alt='mac-img' />
						</div>
						<p>MacBook Pro</p>
					</div>
					<p className='hello-text'>
						Add to Cart
					</p>
				</div>
				<div className='col-3'>
					<div className='card'>
						<span className='action'>9%</span>
						<div className='card-img'>
							<img src={img} alt='mac-img' />
						</div>
						<p>MacBook Pro</p>
					</div>
					<p className='hello-text'>
						Add to Cart
					</p>
				</div>
			</div>
		</div>
	)
}

export default MacBook
