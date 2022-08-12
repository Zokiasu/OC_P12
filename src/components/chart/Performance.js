import React from 'react';

import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


/**
 * @param  {array} {data}
 */
const Performance = ({data}) => {

let userData = [];

for (let i = 0; i < data.length; i++) {
	userData.splice(0,0, {
		subject: data[i].kind,
		A: data[i].value,
		fullMark: 300
	})
}
	return (
    <section className='bg-gray-900 w-[200px] h-[200px] rounded-lg'>
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
						tick={{ fontSize: 12, fontWeight: 500 }}    
					/>
					<Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
    </section>
	);
};

Performance.propTypes = {
  data: PropTypes.array.isRequired
}

export default Performance;