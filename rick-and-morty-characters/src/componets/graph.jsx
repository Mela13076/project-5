

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Graph = ({ data }) => {
  // Process the data to extract the required information for the chart
  const chartData = data.map((character) => ({
    location: character.location.name,
    residentsAlive: character.status === "Alive" ? 1 : 0,
    residentsDead: character.status === "Dead" ? 1 : 0,
  }));

  // Calculate the total number of residents (alive and dead) for each location
  const summarizedData = chartData.reduce((acc, entry) => {
    const { location, residentsAlive, residentsDead } = entry;
    if (!acc[location]) {
      acc[location] = {
        location,
        residentsAlive,
        residentsDead,
      };
    } else {
      acc[location].residentsAlive += residentsAlive;
      acc[location].residentsDead += residentsDead;
    }
    return acc;
  }, {});

  // Convert the summarized data back to an array
  const chartDataFinal = Object.values(summarizedData);

  return (

    <div style={{width: "100%", height: 300}}>
        <ResponsiveContainer>
            <BarChart width={1000} height={300} data={chartDataFinal}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="location" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar dataKey="residentsAlive" fill="#82ca9d" yAxisId="left" />
            <Bar dataKey="residentsDead" fill="#8884d8" yAxisId="right" />
        </BarChart>
        </ResponsiveContainer>
        
    </div>
    
  );
};

export default Graph;
