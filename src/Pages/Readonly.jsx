import React, { useEffect, useState } from 'react';
import { data } from 'react-router';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const Readonly = () => {

  const [chartData, setChartData] = useState([]);


  useEffect(() => {
    fetch("/data/booksData.json")
      .then(res => res.json())
      .then(data => setChartData(data))
  }, []);



  return (
    <div className="w-9/12 mx-auto mt-10 bg-mauve-100">
      <LineChart className='mx-auto' width={1200} height={700} responsive data={chartData}>
        <CartesianGrid/>
        <XAxis dataKey={"bookName"} />
        <YAxis/>
        <Line dataKey={"totalPages"} stroke='blue'/>
      </LineChart>
    </div>
  );
};

export default Readonly;