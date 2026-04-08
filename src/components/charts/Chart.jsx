import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, LabelList, Tooltip, XAxis, YAxis } from 'recharts';
import { BookContext } from '../../context/BookContext';

const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
   Z`;
const margin = { top: 20, right: 30, left: 20, bottom: 5 };
export function TriangleBar(props) {
  const { fill, x, y, width, height } = props;

  if (x == null || y == null || width == null || height == null) {
    return null;
  }

  return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
}

const Chart = () => {
    const { isRead } = useContext(BookContext);
    const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00c49f', '#ffbb28'];
    if (isRead.length === 0) {
    return (
      <div className="container mx-auto flex items-center justify-center h-[50vh] bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl text-center mt-10">Your read list is empty.</h2>
      </div>
    );
  }
    return (
        <div className='container mx-auto mt-10 '>
            <BarChart width={600} height={300} data={isRead} margin={margin} >
      <XAxis dataKey="bookName" />
      <YAxis />
      <Tooltip />
      <Bar dataKey= "totalPages" shape={TriangleBar}>
        {isRead.map((entry, index) => (
      <Cell key={index} fill={colors[index % colors.length]} />
    ))}
    <LabelList dataKey="totalPages" position="top"/>
      </Bar>
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    </BarChart>
        </div>
    );
};

export default Chart;