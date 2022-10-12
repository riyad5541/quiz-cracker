import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const loaderData = useLoaderData();
    const totalQuiz = loaderData.data;
    // console.log(totalQuiz)
   
    return (
        <div>
            {
                <ResponsiveContainer width="95%" height={400}>
                     <LineChart width={500} height={400} data={totalQuiz}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                 </LineChart>
                </ResponsiveContainer>
            }
        </div>
    );
};

export default Statistics;