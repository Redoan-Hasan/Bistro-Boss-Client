import React from 'react';
import { FaWallet, FaUsers, FaUtensils, FaTruck } from 'react-icons/fa';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, BarChart, Bar } from 'recharts';

const AdminHome = () => {
    // Static data for stats cards
    const stats = [
        { id: 1, title: 'Revenue', value: '1000', icon: <FaWallet />, bgColor: 'bg-gradient-to-r from-purple-500 to-purple-400' },
        { id: 2, title: 'Customers', value: '1500', icon: <FaUsers />, bgColor: 'bg-gradient-to-r from-amber-500 to-amber-400' },
        { id: 3, title: 'Products', value: '103', icon: <FaUtensils />, bgColor: 'bg-gradient-to-r from-pink-500 to-pink-400' },
        { id: 4, title: 'Orders', value: '500', icon: <FaTruck />, bgColor: 'bg-gradient-to-r from-blue-500 to-blue-400' }
    ];

    // Static data for area chart - matching the image
    const categoryData = [
        { name: 'Dessert', value: 30, color: '#0088FE' },
        { name: 'Pizza', value: 35, color: '#FF8C00' },
        { name: 'Salad', value: 20, color: '#00C49F' },
        { name: 'Soup', value: 25, color: '#FF0000' }
    ];

    // Static data for pie chart
    const pieChartData = [
        { name: 'Dessert', value: 21, color: '#0088FE' },
        { name: 'Pizza', value: 31, color: '#00C49F' },
        { name: 'Salad', value: 28, color: '#FFBB28' },
        { name: 'Soup', value: 21, color: '#FF8042' }
    ];

    // Custom path generator for the curved area
    const getPath = (x, y, width, height) => {
        return `
            M${x},${y + height}
            C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
            Z
        `;
    };

    // Custom shape component for the area
    const CustomizedArea = (props) => {
        const { x, y, width, height, fill } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="w-full p-4 font-cinzel">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Hi, Welcome Back!</h2>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map(stat => (
                    <div key={stat.id} className={`${stat.bgColor} text-white p-4 rounded-lg flex items-center justify-between`}>
                        <div className="text-4xl">
                            {stat.icon}
                        </div>
                        <div className="text-right">
                            <h3 className="text-3xl font-bold">{stat.value}</h3>
                            <p>{stat.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Charts Section */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Custom Area Chart */}
                    <div className="h-80 flex flex-col">
                        <div className="flex-grow">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={categoryData}
                                    margin={{ top: 30, right: 30, left: 0, bottom: 20 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis 
                                        dataKey="name" 
                                        tick={{ fontSize: 12 }}
                                        interval={0}
                                        tickMargin={10}
                                    />
                                    <YAxis 
                                        domain={[0, 36]} 
                                        ticks={[0, 9, 18, 27, 36]}
                                        tick={{ fontSize: 12 }}
                                    />
                                    <Bar 
                                        dataKey="value" 
                                        shape={<CustomizedArea />} 
                                        label={{ 
                                            position: 'top', 
                                            formatter: (value) => value,
                                            fill: '#666',
                                            fontSize: 12,
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {categoryData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex justify-center mt-2">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-purple-500 mr-1"></div>
                                <span className="text-xs">sold</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Pie Chart */}
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieChartData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    dataKey="value"
                                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                                >
                                    {pieChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Legend 
                                    layout="horizontal" 
                                    verticalAlign="top" 
                                    align="center"
                                    formatter={(value, entry) => (
                                        <span style={{ color: entry.color }}>{value}</span>
                                    )}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;