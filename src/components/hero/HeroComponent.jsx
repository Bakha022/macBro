import React from 'react'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import HeroItemComponent from '../heroItem/HeroItemComponent'

const HeroComponent = () => {
	const arr = [
		{
			title: 'Macbook Air 2020',
			className: '',
			img: './macbook.png',
		},
		{
			title: 'iPhone 13',
			className: 'iphone-img',
			img: './iphone13.png',
		},
		{
			title: 'iPad Pro',
			className: 'ipad-img',
			img: './dsdasdasdasd.png',
		},
		{
			title: 'Air Pods 2020',
			className: 'airpods-img',
			img: './airpods.png',
		},
	]
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'
			>
				<div className='container'>
					{arr.map((item, key) => (
						<SwiperSlide key={key}>
							{' '}
							<HeroItemComponent props={item} />{' '}
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</>
	)
}

export default HeroComponent
