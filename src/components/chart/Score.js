import React from 'react';

import PropTypes from "prop-types";
import { Cell, Pie, PieChart } from "recharts";

const Score = ({score}) => {

	const circleData = [
		{ name: "completed", value: score, fillColor: "#E60000" },
		{ name: "not-completed", value: 1 - score, fillColor: "transparent" }
  ];

	return (
		<div className='relative bg-gray-100/70 rounded-lg w-96 h-96 flex flex-col justify-center items-center'>
      <h2 className='font-semibold text-left text-lg'>Score</h2>
      <PieChart width={200} height={200}>
        <Pie
          data={circleData}
          dataKey="value"
          innerRadius={70}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
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

      <p className='absolute text-center mt-10'>
        <span className='font-bold text-2xl'>{`${100 * score}%`}</span>
        <br />
        de votre
        <br />
        objectif
      </p>
    </div>
	);
};

export default Score;