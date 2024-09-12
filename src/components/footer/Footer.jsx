import React from 'react'
import style from './footer.module.css'

const Footer = () => {
	return (
		<div className={style['footer']}>
			<div className='container'>
				<div className={style['footer-row']}>
					<div className={style['col-3']}>
						<h2 className={style['footer-title']}>Apple</h2>
						<ul className={style['footer-list']}>
							<li className={style['footer-list-items']}>Apple watch</li>
							<li className={style['footer-list-items']}>MacBook</li>
							<li className={style['footer-list-items']}>MacBook AIR</li>
							<li className={style['footer-list-items']}>AirPods</li>
							<li className={style['footer-list-items']}>Iphone</li>
							<li className={style['footer-list-items']}>Apple Glasses</li>
						</ul>
					</div>
					<div className={style['col-3']}>
						<h2 className={style['footer-title']}>Apple</h2>
						<ul className={style['footer-list']}>
							<li className={style['footer-list-items']}>Apple watch</li>
							<li className={style['footer-list-items']}>MacBook</li>
							<li className={style['footer-list-items']}>MacBook AIR</li>
							<li className={style['footer-list-items']}>AirPods</li>
							<li className={style['footer-list-items']}>Iphone</li>
							<li className={style['footer-list-items']}>Apple Glasses</li>
						</ul>
					</div>
					<div className={style['col-3']}>
						<h2 className={style['footer-title']}>Services</h2>
						<ul className={style['footer-list']}>
							<li className={style['footer-list-items']}>Support</li>
							<li className={style['footer-list-items']}>Help</li>
							<li className={style['footer-list-items']}>Polite policy</li>
							<li className={style['footer-list-items']}>Other data</li>
							<li className={style['footer-list-items']}>Calling</li>
						</ul>
					</div>
					<div className={style['col-3']}>
						<h2 className={style['footer-title']}>Information</h2>
						<ul className={style['footer-list']}>
							<li className={style['footer-list-items']}>Interview</li>
							<li className={style['footer-list-items']}>
								Conversation with Steve Jobs
							</li>
							<li className={style['footer-list-items']}>Our secret</li>
							<li className={style['footer-list-items']}>Online information</li>
							<li className={style['footer-list-items']}>
								Advices to new companies
							</li>
							<li className={style['footer-list-items']}>Achievment</li>
							<li className={style['footer-list-items']}>Subsequent goals</li>
						</ul>
					</div>
				</div>
				<div className={style['footer-bottom']}>
					<h1 className={style['footer-title']}>Apple</h1>
					<hr />
					<p className={style['footer-subtitle']}>2020 copyright</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
