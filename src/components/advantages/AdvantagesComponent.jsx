import React, { Component } from 'react'

import LineComponent from '../line/LineComponent'
import TitleComponent from '../title/TitleComponent'
import style from './Advantages.module.css'

export class AdvantagesComponent extends Component {
	render() {
		return (
			<div className='container'>
				<div className={style['advantages']}>
					<TitleComponent size={36} title={'Advantages'} />
					<LineComponent widths={80} heights={5} />
					<div className={style['advantages-row']}>
						<div className={style['col-4']}>
							<div className={style['col-item']}>
								<TitleComponent size={24} title={'Characteristic'} />
								<LineComponent widths={50} heights={5} />
								<p className={style['advantages-subtitle']}>
									Apple company knows what to add to inside laptop so that’s why
									you shouldn’t care about this. We have been working on this
									project since 2016 and we believe It will be our the most
									valuable device in the world in this year
								</p>
							</div>
							<div className={style['col-item']}>
								<TitleComponent size={24} title={'Working speed'} />
								<LineComponent widths={50} heights={5} />
								<p className={style['advantages-subtitle']}>
									Apple company knows what to add to inside laptop so that’s why
									you shouldn’t care about this. We have been working on this
									project since 2016 and we believe It will be our the most
									valuable device in the world in this year
								</p>
							</div>
						</div>
						<div className='col-4'>
							<img
								className={style['advantages-img']}
								src='./macbook_12_inch_retina_template_2048x 1.png'
								alt='advantages-img'
							/>
						</div>
						<div className={style['col-4']}>
							<div className={style['col-item']}>
								<TitleComponent size={24} title={'Abilities'} />
								<LineComponent widths={50} heights={5} />
								<p className={style['advantages-subtitle']}>
									Apple company knows what to add to inside laptop so that’s why
									you shouldn’t care about this. We have been working on this
									project since 2016 and we believe It will be our the most
									valuable device in the world in this year
								</p>
							</div>
							<div className={style['col-item']}>
								<TitleComponent size={24} title={'Working test'} />
								<LineComponent widths={50} heights={5} />
								<p className={style['advantages-subtitle']}>
									Apple company knows what to add to inside laptop so that’s why
									you shouldn’t care about this. We have been working on this
									project since 2016 and we believe It will be our the most
									valuable device in the world in this year
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default AdvantagesComponent
