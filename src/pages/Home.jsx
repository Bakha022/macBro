import React from 'react'
import AdvantagesComponent from '../components/advantages/AdvantagesComponent'
import HeroComponent from '../components/hero/HeroComponent'
import TabsComponent from '../components/tabs/TabsComponent'
import AbilitiesComponent from '../components/abilities/AbilitiesComponent'
import CameraComponent from '../components/camera/CameraComponent'

const Home = () => {
	return (
		<>
			<HeroComponent />
			<AdvantagesComponent />
			<TabsComponent />
			<AbilitiesComponent/>
			<CameraComponent/>
		</>
	)
}

export default Home
