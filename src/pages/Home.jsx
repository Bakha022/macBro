import React, { useEffect, useState } from 'react'
import AbilitiesComponent from '../components/abilities/AbilitiesComponent'
import AdvantagesComponent from '../components/advantages/AdvantagesComponent'
import CameraComponent from '../components/camera/CameraComponent'
import HeroComponent from '../components/hero/HeroComponent'
import TabsComponent from '../components/tabs/TabsComponent'

import LoadingComponent from './../components/loading/LoadingComponent'

const Home = () => {
	// const [call, setCall] = useState(false)

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setCall(true)
	// 	}, 500)
	// })

	// if (call) {
	// 	return (
	// 		<>
	// 			<HeroComponent />
	// 			<AdvantagesComponent />
	// 			<TabsComponent />
	// 			<AbilitiesComponent />
	// 			<CameraComponent />
	// 		</>
	// 	)
	// }

	// return (
	// 	<>
	// 		<LoadingComponent />
	// 	</>
	// )

	return (
		<>
			<HeroComponent />
			<AdvantagesComponent />
			<TabsComponent />
			<AbilitiesComponent />
			<CameraComponent />
		</>
	)
}

export default Home
