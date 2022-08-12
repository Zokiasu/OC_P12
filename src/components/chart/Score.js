import React from 'react';

import PropTypes from "prop-types";
import { Cell, Pie, PieChart } from "recharts";


/**
 * @param  {number} {score}
 */
const Score = ({score}) => {

	const circleData = [
		{ name: "completed", value: score, fillColor: "#E60000" },
		{ name: "not-completed", value: 1 - score, fillColor: "transparent" }
  ];

	return (
		<div className='relative w-[200px] h-[200px] bg-gray-100/70 rounded-lg flex flex-col justify-center items-center'>
      <h2 className='font-semibold absolute top-5'>Score </h2>
      <PieChart width={200} height={200}>
        <Pie
          data={circleData}
          dataKey="value"
          innerRadius={60}
          outerRadius={65}
          startAngle={90}
          endAngle={450}
          cy={115}
        >
          {circleData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.fillColor}
              cornerRadius="50%"
            />
          ))}
        </Pie>
      </PieChart>

      <p className='absolute text-center mt-8 text-xs'>
        <span className='font-bold text-xl'>{`${100 * score}%`}</span>
        <br />
        de votre
        <br />
        objectif
      </p>
    </div>
	);
};

Score.propTypes = {
  score: PropTypes.number.isRequired
}

export default Score;