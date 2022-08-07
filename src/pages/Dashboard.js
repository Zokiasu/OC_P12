import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import Activity from '../components/chart/Activity';
import AverageSession from '../components/chart/AverageSessions';
import Performance from '../components/chart/Performance';
import Score from '../components/chart/Score';
import UserInfo from '../components/chart/UserInfo';
import apiRequest from '../service/Request';

/** 
 * @component
 * @namespace Dashboard
 * 
 * @description This is component for Dashboard page, when it's rendered, display first name, nutriments and some charts with fetched informations of the user
 * 
 */
const Dashboard = () => {

	const params = useParams()
	const userId = params.id

	// Fetch user informations
	const activityUrl = `http://localhost:3000/user/${userId}/activity`
	const averageSessionUrl = `http://localhost:3000/user/${userId}/average-sessions`
	const performanceUrl = `http://localhost:3000/user/${userId}/performance`
	const userUrl = `http://localhost:3000/user/${userId}`

	// Set user informations to state
	const [activity, setActivity] = useState(null)
	const [averageSession, setAverageSession] = useState(null)
	const [performance, setPerformance] = useState(null)
	const [user, setUser] = useState(null)

	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// Fetch user informations 
		const fetchData = async () => {
			const activity = await apiRequest('activity', activityUrl)
			const averageSession = await apiRequest('average-sessions', averageSessionUrl)
			const performance = await apiRequest('performance', performanceUrl)
			const user = await apiRequest('user', userUrl)

			setActivity(activity.sessions)
			setAverageSession(averageSession.sessions)
			setPerformance(performance)
			setUser(user)
		}
		fetchData().then(() => setIsLoaded(true))
	}, []);

	return !isLoaded ? <p className='w-full text-2xl p-10'>Loading...</p>
    : (
		<div className='p-5 xl:pt-16 xl:px-20 space-y-10'>
			<div className='space-y-5 xl:space-y-8'>
				<h1 className='text-3xl xl:text-5xl font-semibold'>Bonjour <span className='text-red-500'>{user ? user.KeyData.firstName:'Guest'}</span></h1>
				<p className='text-xl xl:text-2xl'>Félicitation ! Vous avez explosé vos objectifs hier</p>
			</div>
			<div className='flex space-x-5'>
				<div className='space-y-5'>
					{ activity && ( <Activity dailyActivity ={activity}/> ) }
					<div className='w-full flex justify-between'>
						{ averageSession && ( <AverageSession userId={userId} averageSessions={averageSession}/> ) }
						{ performance && ( <Performance data={performance.data} kind={performance.kind}/> ) }
						{ user && ( <Score score={user.todayScore}/> ) }
					</div>
				</div>
				{ user && ( <UserInfo userData={user.userInfos}/> ) }
			</div>
		</div>
	);
};

export default Dashboard;