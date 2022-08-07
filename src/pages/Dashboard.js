import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

import Activity from '../components/chart/Activity';
import AverageSession from '../components/chart/AverageSessions';
import Performance from '../components/chart/Performance';
import Score from '../components/chart/Score';
import UserInfo from '../components/chart/UserInfo';
import apiCall from '../service/request';

const Dashboard = () => {

	const params = useParams()
	const userId = params.id

	const activityUrl = `http://localhost:3000/user/${userId}/activity`
	const averageSessionUrl = `http://localhost:3000/user/${userId}/average-sessions`
	const performanceUrl = `http://localhost:3000/user/${userId}/performance`
	const userUrl = `http://localhost:3000/user/${userId}`

	const [activity, setActivity] = React.useState(null)
	const [averageSession, setAverageSession] = React.useState(null)
	const [performance, setPerformance] = React.useState(null)
	const [user, setUser] = React.useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const activity = await apiCall('activity', activityUrl)
			const averageSession = await apiCall('average-sessions', averageSessionUrl)
			const performance = await apiCall('performance', performanceUrl)
			const user = await apiCall('user', userUrl)

			setActivity(activity.sessions)
			setAverageSession(averageSession.sessions)
			setPerformance(performance)
			setUser(user)
		}
		fetchData()
	}, []);

	return (
		<div className='pt-16 px-20 space-y-14'>
			<div className='space-y-8'>
				<h1 className='text-5xl font-semibold'>Bonjour <span className='text-red-500'>{user ? user.KeyData.firstName:'Guest'}</span></h1>
				<p className='text-2xl'>Félicitation ! Vous avez explosé vos objectifs hier</p>
			</div>
			<div className='flex space-x-10'>
				<div className='space-y-10'>
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