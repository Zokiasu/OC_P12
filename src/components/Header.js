import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/icons/logo.svg'

const Header = () => {
	return (
		<div className='bg-black fixed flex justify-between items-center w-full z-10 text-white p-5'>
			<NavLink to="/user/12">
				<Logo className='w-32'/>
			</NavLink>
			<ul className='flex justify-around w-full text-xl'>
				<li>
					<a href='/'>Acceuil</a>
				</li>
				<li>
					<a href='#'>Profil</a>
				</li>
				<li>
					<a href='#'>Réglage</a>
				</li>
				<li>
					<a href='#'>Communauté</a>
				</li>
			</ul>
		</div>
	);
};

export default Header;