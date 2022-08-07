import React from 'react';
import { NavLink } from 'react-router-dom';

/** 
 * @component
 * @namespace Error
 * 
 * @description This is component for 404 page, when is rendered, display error message
 * 
 */
const Error404 = () => {
	return (
		<div className='flex flex-col items-center justify-center text-xl space-y-10 min-h-full'>
			<h1 className='text-red-700 text-8xl font-bold'>404</h1>
			<p>La page que vous cherchez n'existe pas</p>
			<ul className='flex space-x-5'>
				<NavLink to="/">
					<li className="bg-red-700 text-white rounded-lg px-5 py-2">Revenir à la page d'acceuil</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Error404;