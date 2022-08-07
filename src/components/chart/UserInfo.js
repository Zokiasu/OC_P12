import React from 'react';

import { ReactComponent as Apple } from '../../assets/icons/apple.svg'
import { ReactComponent as Cheeseburger } from '../../assets/icons/cheeseburger.svg'
import { ReactComponent as Chicken } from '../../assets/icons/chicken.svg'
import { ReactComponent as Fire } from '../../assets/icons/fire.svg'

const UserInfo = ({userData}) => {
	return (
		<div className='space-y-5 min-h-max flex flex-col justify-between'>
			<div className='bg-gray-100/70 rounded flex items-center justify-around py-8 px-10 space-x-10'>
				<Fire className='w-20 h-20' />
				<div className='space-y-1'>
					<p className='font-bold text-2xl'>{userData.calorieCount + 'kCal'}</p>
					<p className='text-gray-500 font-semibold text-xl'>Calories</p>
				</div>
			</div>
			<div className='bg-gray-100/70 rounded flex items-center justify-around py-8 px-10 space-x-10'>
				<Chicken className='w-20 h-20' />
				<div className='space-y-1'>
					<p className='font-bold text-2xl'>{userData.proteinCount + 'g'}</p>
					<p className='text-gray-500 font-semibold text-xl'>Proteines</p>
				</div>
			</div>
			<div className='bg-gray-100/70 rounded flex items-center justify-around py-8 px-10 space-x-10'>
				<Apple className='w-20 h-20' />
				<div className='space-y-1'>
					<p className='font-bold text-2xl'>{userData.carbohydrateCount + 'g'}</p>
					<p className='text-gray-500 font-semibold text-xl'>Glucides</p>
				</div>
			</div>
			<div className='bg-gray-100/70 rounded flex items-center justify-around py-8 px-10 space-x-10'>
				<Cheeseburger className='w-20 h-20' />
				<div className='space-y-1'>
					<p className='font-bold text-2xl'>{userData.lipidCount + 'g'}</p>
					<p className='text-gray-500 font-semibold text-xl'>Lipides</p>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;