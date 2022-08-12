import React from 'react';

import PropTypes from "prop-types";

import { ReactComponent as Apple } from '../../assets/icons/apple.svg'
import { ReactComponent as Cheeseburger } from '../../assets/icons/cheeseburger.svg'
import { ReactComponent as Chicken } from '../../assets/icons/chicken.svg'
import { ReactComponent as Fire } from '../../assets/icons/fire.svg'


/**
 * @param  {object} {userData}
 */
const UserInfo = ({userData}) => {
	return (
		<div className='flex justify-between lg:flex-col'>
			<div className='bg-gray-100/70 rounded flex items-center justify-around py-4 px-5 space-x-5 lg:px-10 lg:py-6'>
				<Fire className='w-10 h-10' />
				<div>
					<p className='font-bold text-xl'>{userData.calorieCount + 'kCal'}</p>
					<p className='text-gray-500 font-semibold'>Calories</p>
				</div>
			</div>
			<div className='bg-gray-100/70 rounded flex items-center justify-around py-4 px-5 space-x-5 lg:px-10 lg:py-6'>
				<Chicken className='w-10 h-10' />
				<div>
					<p className='font-bold text-xl'>{userData.proteinCount + 'g'}</p>
					<p className='text-gray-500 font-semibold'>Proteines</p>
				</div>
			</div>
			<div className='bg-gray-100/70 rounded flex items-center justify-around py-4 px-5 space-x-5 lg:px-10 lg:py-6'>
				<Apple className='w-10 h-10' />
				<div>
					<p className='font-bold text-xl'>{userData.carbohydrateCount + 'g'}</p>
					<p className='text-gray-500 font-semibold'>Glucides</p>
				</div>
			</div>
			<div className='bg-gray-100/70 rounded flex items-center justify-around py-4 px-5 space-x-5 lg:px-10 lg:py-6'>
				<Cheeseburger className='w-10 h-10' />
				<div>
					<p className='font-bold text-xl'>{userData.lipidCount + 'g'}</p>
					<p className='text-gray-500 font-semibold'>Lipides</p>
				</div>
			</div>
		</div>
	);
};

UserInfo.propTypes = {
  userData: PropTypes.object.isRequired
}

export default UserInfo;