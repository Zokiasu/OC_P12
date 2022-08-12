import React from 'react';
import PropTypes from "prop-types";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


/**
 * @param  {string} {userId}
 * @param  {array} {averageSessions}
 */
const AverageSessions = ({userId, averageSessions}) => {
	return (
		<div className='bg-red-500 w-[200px] h-[200px] relative rounded-lg'>
			<h3 className='absolute top-5 left-5 text-white'>Durée moyenne des sessions</h3>
			<ResponsiveContainer
				width="100%" 
				height="100%"
			>
				<LineChart
					data={averageSessions}
					outerRadius="100%"
					margin={{ top: 5, right: 15, left: 15, bottom: 5 }}
					width={200}
					height={200}
				>
					<XAxis 
						dataKey="day" 
						stroke="rgba(255, 255, 255, 0.6)"
						dy={10}
						tick={{ fontSize: 14, fill: "rgba(255, 255, 255, 0.5)"}}
						margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
						tickLine={false}
						axisLine={false}
					/>
					<YAxis 
          	dataKey="sessionLength"
						domain={[0, "dataMax + 60"]}
						hide={true}
					/>
					<Line
						dataKey="sessionLength"
						type={`${userId === "18" ? "step" : "monotone"}`}
						stroke="#FFFFFF "
						strokeWidth={2}
						dot={false}
						activeDot={{
							stroke: "rgba(255,255,255, 0.6)",
							strokeWidth: 10,
							r: 5,
						}}
					/>
					<Tooltip 
						content={<CustomTooltip />}
						cursor={{
							stroke: "rgba(0, 0, 0, 0.1)",
							strokeWidth: 32,
						}}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

AverageSessions.propTypes = {
  userId: PropTypes.string.isRequired,
  averageSessions: PropTypes.array.isRequired
}

/**
 * @param  {bool} {active}
 * @param  {array} {payload}
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="bg-white px-2">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default AverageSessions;