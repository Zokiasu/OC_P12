import React from 'react';
import PropTypes from "prop-types";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";


/**
 * @param  {array} {dailyActivity}
 * @returns user activity chart
 */
const Activity = ({dailyActivity}) => {
	return (
		<section className='bg-gray-100/70 p-5'>
			<div className='flex justify-between font-semibold'>
				<p className='ml-5 xl:ml-10'>Activité quotidienne</p>
				<div className='flex space-x-5 text-gray-500'>
					<p>
						<span className='bg-black w-2 h-2 mr-2 inline-block rounded-full'></span>
						Poids (kg)
					</p>
					<p>
						<span className='bg-red-500 w-2 h-2 mr-2 inline-block rounded-full'></span>
						Calories brulées (kCal)
					</p>
				</div>
			</div>
      <BarChart
        data={dailyActivity}
        margin={{ top: 40, right: 0, bottom: 32, left: 48 }}
        barGap={8}
        barCategoryGap="35%"
        width={635}
        height={200}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="day"
          dy={16}
          padding={{ left: -48, right: 0 }}
          stroke="color-neutral400"
          tick={{ fontSize: 14, fontWeight: 500 }}
        />
        <YAxis
          yAxisId="kg"
          dataKey="kilogram"
          domain={["dataMin - 1", "dataMax + 2"]}
          allowDecimals={false}
          dx={0}
          orientation="right"
        />
        <YAxis
          yAxisId="cal"
          dataKey="calories"
          domain={[0, "dataMax + 50"]}
          hide={true}
        />
        <Bar
          yAxisId="kg"
          dataKey="kilogram"
          maxBarSize={8}
          fill="color-neutral500"
          radius={[50, 50, 0, 0]}
        />
        <Bar
          yAxisId="cal"
          dataKey="calories"
          maxBarSize={8}
          fill="#E60000"
          radius={[50, 50, 0, 0]}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
        />
      </BarChart>
		</section>
	);
};

Activity.propTypes = {
  dailyActivity: PropTypes.array.isRequired,
};

/**
 * @param  {bool} {active}
 * @param  {array} {payload}
 */
function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return (
      <div className="bg-red-500 text-center p-2">
        <p className="text-white">{`${payload[0].value} kg`}</p>
        <p className="text-white">{`${payload[1].value} kCal`}</p>
      </div>
    );
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

export default Activity;