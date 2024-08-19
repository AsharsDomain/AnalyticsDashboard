import React, { useEffect, useState } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, BarChart, Bar } from 'recharts';
import { fetchMockData } from '../api';

function Home({ theme }) {
    // State to hold the fetched data
    const [data, setData] = useState({
        products: 0,
        categories: 0,
        customers: 0,
        alerts: 0,
        pieData: [],
        lineData: [],
        barData: [],
    });

    // Fetch data when component mounts
    useEffect(() => {
        fetchMockData().then(fetchedData => {
            setData(fetchedData);
        });
    }, []);

    return (
        <main className="main-container">
            <div className="main-title">
                <h3>FOLLOWERS</h3>
            </div>

            <div className="main-cards">
                <div className="card">
                    <div className="card-inner">
                        <h3>POSTS</h3>
                        <BsFillArchiveFill className="card_icon" />
                    </div>
                    <h1>{data.products}</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>ENGAGEMENTS</h3>
                        <BsFillGrid3X3GapFill className="card_icon" />
                    </div>
                    <h1>{data.categories}</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>MENTIONS</h3>
                        <BsPeopleFill className="card_icon" />
                    </div>
                    <h1>{data.customers}</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>ALERTS</h3>
                        <BsFillBellFill className="card_icon" />
                    </div>
                    <h1>{data.alerts}</h1>
                </div>
            </div>

            <div className={`charts ${theme === 'dark' ? 'dark-mode' : ''}`}>
                {/* Pie Chart */}
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={data.pieData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>

                {/* Line Chart */}
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        width={500}
                        height={300}
                        data={data.lineData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>

                {/* Bar Chart */}
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data.barData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="users" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}

export default Home;
