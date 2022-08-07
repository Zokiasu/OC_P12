import React from 'react';

import { ReactComponent as Bike } from '../assets/icons/bike.svg'
import { ReactComponent as Dumbbell } from '../assets/icons/dumbbell.svg'
import { ReactComponent as Swim } from '../assets/icons/swim.svg'
import { ReactComponent as Yoga } from '../assets/icons/yoga.svg'

const VerticalNav = () => {
	return (
		<div className='relative min-h-[764px] h-screen bg-black flex flex-col items-center justify-center p-5'>
			<ul className='space-y-5'>
				<li>
					<a href='#'>
						<Yoga className='w-14 h-14'/>
					</a>
				</li>
				<li>
					<a href='#'>
						<Swim className='w-14 h-14'/>
					</a>
				</li>
				<li>
					<a href='#'>
						<Bike className='w-14 h-14'/>
					</a>
				</li>
				<li>
					<a href='#'>
						<Dumbbell className='w-14 h-14'/>
					</a>
				</li>
			</ul>
			<p className='absolute bottom-20 left-0 right-0 text-xs text-center text-white whitespace-nowrap -rotate-90'>Copiryght, SportSee 2020</p>
		</div>
	);
};

export default VerticalNav;