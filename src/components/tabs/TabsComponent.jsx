import React, { useState } from 'react'

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import RangeComponent from '../range/RangeComponent'
import style from './TabsComponent.module.css'

const TabsComponent = () => {
	const [selectedTab, setSelectedTab] = useState(2)

	const tabsData = {
		firstTab: [
			{
				title: '5.40 GHz',
				subtitle: 'Intel core-I7 on Macbook Air 2020',
				length: '100%',
			},
			{
				title: 'The fastest working',
				subtitle: 'SSD 1TB on MacBook Air 2020',
				length: '60%',
			},
			{
				title: '10min Render on After Effects',
				subtitle: "Nvidia's GeForce RTX 4090",
				length: '90%',
			},
		],
		secondTab: [
			{
				title: 'Swift',
				subtitle: 'C++, Swift Programming language',
				length: '50%',
			},
			{
				title: 'WebKit',
				subtitle: 'WebKit is an open source Web content engine',
				length: '60%',
			},
			{
				title: 'CareKit',
				subtitle: 'CareKit is an open source framework',
				length: '70%',
			},
		],
		thirdTab: [
			{
				title: '3.80GHz',
				subtitle: 'Intel core-I5 on Macbook Air 2020',
				length: '100%',
			},
			{
				title: 'The fastest working',
				subtitle: 'SSD 1TB on MacBook Air 2020',
				length: '60%',
			},
			{
				title: '10min Render on After Effects',
				subtitle: 'Gtx 2080-TI',
				length: '75%',
			},
		],
		fourthTab: [
			{
				title: 'Adjust VoiceOver voices',
				subtitle: 'Enhanced-quality voices can be 100 MB or larger',
				length: '80%',
			},
			{
				title: 'Remove a downloaded voice',
				subtitle: "You can't delete the Siri voices for your country or region",
				length: '80%',
			},
			{
				title: 'Speak Screen',
				subtitle: 'Accessibility and tap Spoken Content',
				length: '95%',
			},
		],
		fifthTab: [
			{
				title: 'This nutritious fruit offers multiple health benefits',
				subtitle: 'Nutritious',
				length: '50%',
			},
			{
				title: 'Could be good for your heart',
				subtitle: "Apples have been linked to a lower chance of heart disease",
				length: '63%',
			},
			{
				title: 'Linked to a lower chance of diabetes',
				subtitle: 'Eating apples may also reduce your chance of type 2 diabetes',
				length: '51%',
			},
		],
	}

	// 

	return (
		<div className='container'>
			<div className={style['tab-component']}>
				<h1 className={style['tab-title']}>Characteristic</h1>
				<div className={style['tab-top-line']}></div>
				<Tabs
					selectedIndex={selectedTab}
					onSelect={index => setSelectedTab(index)}
				>
					<TabList>
						<Tab className={style['tab']}>Gaming</Tab>
						<Tab className={style['tab']}>Project</Tab>
						<Tab className={style['tab']}>Working</Tab>
						<Tab className={style['tab']}>Speed</Tab>
						<Tab className={style['tab']}>Benefits</Tab>
					</TabList>
					<div className={style['tab-panels']}>
						<TabPanel>
							{tabsData.firstTab.map(({ title, subtitle, length }, key) => (
								<RangeComponent
									key={key}
									title={title}
									subtitle={subtitle}
									lenght={length}
								/>
							))}
						</TabPanel>
						<TabPanel className={style['tab-panel']}>
							{tabsData.secondTab.map(({ title, subtitle, length }, key) => (
								<RangeComponent
									key={key}
									title={title}
									subtitle={subtitle}
									lenght={length}
								/>
							))}
						</TabPanel>
						<TabPanel className={style['tab-panel']}>
							{tabsData.thirdTab.map(({ title, subtitle, length }, key) => (
								<RangeComponent
									key={key}
									title={title}
									subtitle={subtitle}
									lenght={length}
								/>
							))}
						</TabPanel>
						<TabPanel className={style['tab-panel']}>
						{tabsData.fourthTab.map(({ title, subtitle, length }, key) => (
								<RangeComponent
									key={key}
									title={title}
									subtitle={subtitle}
									lenght={length}
								/>
							))}
						</TabPanel>
						<TabPanel className={style['tab-panel']}>
							{tabsData.fifthTab.map(({ title, subtitle, length }, key) => (
								<RangeComponent
									key={key}
									title={title}
									subtitle={subtitle}
									lenght={length}
								/>
							))}
						</TabPanel>
					</div>
				</Tabs>
			</div>
		</div>
	)
}

export default TabsComponent
