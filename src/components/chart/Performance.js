import React from 'react';

import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const Performance = ({data, kind}) => {

let userData = [];

for (let i = 0; i < data.length; i++) {
	userData.splice(0,0, {
		subject: kind[i+1],
		A: data[i].value,
		fullMark: 300
	})
}
	return (
    <section className='w-96 h-96 bg-gray-900 rounded-lg'>
			<ResponsiveContainer width="100%" height="100%" border-radius="10px">
				<RadarChart 
					cx="50%" 
					cy="50%" 
					data={userData}
					outerRadius={"70%"}  
				>
					<PolarGrid radialLines={false}/>
					<PolarAngleAxis 
						dataKey="subject"
						stroke="white"
						dy={4}
						tickLine={false}
						tick={{
							fontSize: 12,
							fontWeight: 500
						}}    
					/>
					<Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
    </section>
	);
};

export default Performance;