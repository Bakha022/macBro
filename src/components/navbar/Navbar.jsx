import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { FaBarsStaggered } from 'react-icons/fa6'
import { IoMdCloseCircle } from 'react-icons/io'
import { IoCart, IoSearch } from 'react-icons/io5'
import style from './navbar.module.css'

const Navbar = () => {
	// const navRef = useRef()

	// const showNav = () => {
	// 	navRef.current.classList.toggle('show')
	// 	console.log(navRef.current);
	// }

	const [show, setShow] = useState(false)

	const handleToggleMenu = e => {
		setShow(!show)
		e.stopPropagation()
		console.log('show')
	}

	const handleCloseMenu = e => {
		setShow(false)
		e.stopPropagation()
		console.log('close')
	}
	
	return (
		<nav>
			<div className='container'>
				<div className={style['nav-row']}>
					<div className={style['logo']}>
						<NavLink onClick={handleCloseMenu} to={'/'}>
							<img src='apple.svg' alt='logo' />
						</NavLink>
					</div>
					<ul className={`${style['list-item']} ${show ? style['show'] : ''}`}>
						<IoMdCloseCircle
							onClick={handleCloseMenu}
							className={style['close-bar']}
						/>
						<li className={style['list-items']}>
							<NavLink
								onClick={handleCloseMenu}
								to={'/macbook'}
								className={style['list-items-link']}
							>
								MacBook
							</NavLink>
						</li>
						<li className={style['list-items']}>
							<NavLink
								onClick={handleCloseMenu}
								to={'/iphone'}
								className={style['list-items-link']}
							>
								Iphone
							</NavLink>
						</li>
						<li className={style['list-items']}>
							<NavLink
								onClick={handleCloseMenu}
								to={'/ipad'}
								className={style['list-items-link']}
							>
								Ipad
							</NavLink>
						</li>
						<li className={style['list-items']}>
							<NavLink
								onClick={handleCloseMenu}
								to={'/airpods'}
								className={style['list-items-link']}
							>
								Airpods
							</NavLink>
						</li>
					</ul>

					<aside className={style['nav-icons']}>
						<IoSearch />
						<NavLink onClick={handleCloseMenu}
								to={'/cart'}>
							<IoCart />
						</NavLink>
						<div className={style['responsive-bars']}>
							<FaBarsStaggered
								onClick={handleToggleMenu}
								className={style['bar-icon']}
							/>
						</div>
					</aside>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
