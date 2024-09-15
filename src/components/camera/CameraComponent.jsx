import React from 'react'

import LineComponent from '../line/LineComponent'
import TitleComponent from '../title/TitleComponent'
import style from './CameraComponent.module.css'
const CameraComponent = () => {
	return (
		<div className={style['apple-camera']}>
			<div className='container'>
				<div className={style['apple-camera-titles']}>
					<TitleComponent size={36} title={'The power of Apple’s camera'} />
					<LineComponent heights={5} widths={80} />
					<p className={style['apple-camera-subtitle']}>
						Company knows his work in high quality and Apple recommends you not
						to worry about quality of camera
					</p>
				</div>
				<div className={style['app-cam-row']}>
					<img className={style['mac-top-relama']} src='./mac.png' alt='' />
					<div className={style['cam-left']}>
						<TitleComponent size={32} title={'Hang out with friends'} />
						<LineComponent heights={5} widths={80} />
						<p className={style['cam-left-subtitle']}>
							You will never feel discomfortable as It never breaks down, chill
							out!
						</p>
						<div className={style['cam-left-img']}>
							<img src='./maccamera.png' alt='cam-mac' />
						</div>
					</div>
					<div className={style['cam-right']}>
						<TitleComponent size={32} title={'Programms'} />
						<LineComponent heights={5} widths={80} />
						<p className={style['cam-right-subtile']}>
							You will never feel discomfor- table as camera works faster than
							others laptops
						</p>

						<div className={style['cam-programms']}>
							<div className={style['face']}>
								<img src='./18066602_G.svg' alt='face-time-icon' />
								<p className={style['program-titile-face']}>Facetime</p>
							</div>
							<div className={style['zoom']}>
								<img src='./zoom.svg' alt='zoom-icon' />
								<p className={style['program-titile-zoom']}>Zoom</p>
							</div>
						</div>
					</div>
				</div>
				<div className={style['app-bottom-row']}>
					<div className={style['bottom-row-left']}>
						<TitleComponent size={30} title={'Mac for studying'} />
						<div className={style	['bottom-row-title']}>
							Study with the fastest devices and without any type of issues
						</div>
					</div>
					<div className={style['bottom-row-right']}>
						<TitleComponent size={30} title={'We’ve reached 1M users!'} />
						<div className={style	['bottom-row-title']}>
						Apple company is glad to see happy
						customers with pleasure face
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CameraComponent
