import React from 'react'

import LineComponent from '../line/LineComponent'
import TitleComponent from '../title/TitleComponent'

import style from './AbilitiesComponent.module.css'

const AbilitiesComponent = () => {
	return (
		<div className='container'>
			<div className={style['abilities-top']}>
				<TitleComponent size={'36'} title={'Abilities'} />
				<LineComponent widths={60} heights={5} />
				<div className={style['abilites-row']}>
					<div className={style['row-left']}>
						<div className={style['left-top-titles']}>
							<TitleComponent size={28} title={'The best devices ever'} />
							<LineComponent widths={80} heights={5} />
						</div>
						<p className={style['row-left-text']}>
							You will never feel discomfortable as It never breaks down, chill
							out!
						</p>
						<div className={style['row-left-img']}>
							<img src='/apple-Products 1.png' alt='apple-products-img' />
						</div>
					</div>
					<div className={style['row-right']}>
						<TitleComponent size={28} title={'Touch ID'} />
						<LineComponent widths={80} heights={5} />
						<div className={style['right-row']}>
							<div className={style['col-3']}>
								<div className={style['col-3-img']}>
									<img
										src='./touchid_icon_unlock__dcnpijuk476u_large.png'
										alt='unclock-img'
									/>
								</div>
								<p className={style['col-3-text']}>Unlock your Mac</p>
							</div>
							<div className={style['col-3']}>
								<div className={style['col-3-img']}>
									<img
										src='./touchid_icon_protected__c3upubizihw2_large.png'
										alt='protected'
									/>
								</div>
								<p className={style['unlock-text']}>
									Open password- protected documents
								</p>
							</div>
						</div>
						<div className={style['right-row']}>
							<div className={style['col-3']}>
								<div className={style['col-3-img']}>
									<img
										src='./touchid_icon_applepay__ecbwfqmxgb8m_large.png'
										alt='applepay'
									/>
								</div>
								<p className={style['col-3-text-3']}>Use Apple Pay</p>
							</div>
							<div className={style['col-3']}>
								<div className={style['col-3-img']}>
									<img
										src='./touchid_icon_appletv__3fs6e8i5vgya_large.png'
										alt='apple-tv'
									/>
								</div>
								<p className={style['tv-text']}>
									Make purchases on the Apple TV app
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AbilitiesComponent
