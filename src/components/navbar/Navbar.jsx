import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { FaBarsStaggered } from 'react-icons/fa6'
import { IoMdCloseCircle } from 'react-icons/io'
import { IoCart, IoSearch } from 'react-icons/io5'
import style from './navbar.module.css'

const Navbar = () => {
	const [show, setShow] = useState(false)
	const [showCart, setShowCart] = useState(false)

	const handleToggleMenu = e => {
		setShow(!show)
		e.stopPropagation()
	}

	const handleCloseMenu = e => {
		setShow(false)
		e.stopPropagation()
	}

	const handleToggleCart = e => {
		setShowCart(!showCart)
		e.stopPropagation()
	}

	const handleCloseCart = e => {
		setShowCart(false)
		e.stopPropagation()
	}

	return (
		<>
			<nav>
				<div className='container'>
					<div className={style['nav-row']}>
						<div className={style['logo']}>
							<NavLink onClick={handleCloseMenu} to={'/'}>
								<img src='apple.svg' alt='logo' />
							</NavLink>
						</div>
						<ul
							className={`${style['list-item']} ${show ? style['show'] : ''}`}
						>
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
							{/* <NavLink onClick={handleCloseMenu} to={'/cart'}>
						</NavLink> */}
							<IoCart onClick={handleToggleCart} />

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
			<aside
				className={`${style['aside-card']} , ${showCart ? style['show'] : ''}`}
			>
				<div className={style['cart-section']}>
					<IoMdCloseCircle onClick={handleCloseCart} className={style['']} />
					hello world
				</div>
			</aside>
		</>
	)
}

export default Navbar
