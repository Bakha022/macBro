import React from 'react'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import ButtonComponent from '../button/ButtonComponent'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import style from './HeroComponent.module.css'

const HeroComponent = () => {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'
			>
				<div className='container'>
					<SwiperSlide>
						<h1 className={style['hero-title']}>MacBook Air 2020</h1>
						<div className={style['line']}></div>
						<p className={style['hero-subtitle']}>
							The modern technologies with sufficient conditions just buy it
							because we are apple and you need to buy
						</p>
						<div className={style['hero-img']}>
							<img src='./macbook.png' alt='hero-img' />
						</div>
						<ButtonComponent props={'Add Cart'} />
					</SwiperSlide>
				</div>
				<SwiperSlide>
					<h1 className={style['hero-title']}>iPhone 13</h1>
					<div className={style['line']}></div>
					<p className={style['hero-subtitle']}>
						The modern technologies with sufficient conditions just buy it
						because we are apple and you need to buy
					</p>
					<div className={style['hero-img']}>
						<img className={style['iphone-img']} src='./iphone13.png' alt='hero-img' />
					</div>
					<ButtonComponent props={'Add Cart'} />
				</SwiperSlide>
				<SwiperSlide>
					<h1 className={style['hero-title']}>iPad Pro</h1>
					<div className={style['line']}></div>
					<p className={style['hero-subtitle']}>
						The modern technologies with sufficient conditions just buy it
						because we are apple and you need to buy
					</p>
					<div className={style['hero-img']}>
						<img className={style['ipad-img']} src='./dsdasdasdasd.png' alt='hero-img' />
					</div>
					<ButtonComponent props={'Add Cart'} />
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default HeroComponent
