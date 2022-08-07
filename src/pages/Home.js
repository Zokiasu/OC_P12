import React from 'react';
import { NavLink } from 'react-router-dom';

/** 
 * @component
 * @namespace Home
 * 
 * @description This is component for Home page, when it's rendered, display two buttons to redirect to Dashboard for each user
 * 
 */
const Home = () => {
	return (
		<div className='flex flex-col items-center justify-center text-xl space-y-10 min-h-full'>
			<h1 className='text-red-700 text-5xl font-bold'>Bienvenue</h1>
			<p>Choisissez votre utilisateur</p>
			<ul className='flex space-x-5'>
				<NavLink to="/user/12">
					<li className="bg-red-700 text-white rounded-lg px-5 py-2">User 12</li>
				</NavLink>
				<NavLink to="/user/12">
					<li className="bg-red-700 text-white rounded-lg px-5 py-2">User 18</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Home;