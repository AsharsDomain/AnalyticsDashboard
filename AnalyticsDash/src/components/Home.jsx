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

    // State to manage selected year
    const [selectedYear, setSelectedYear] = useState('2023');

    // State to manage real-time card values
    const [counts, setCounts] = useState({
        posts: 0,
        engagements: 0,
        mentions: 0,
        alerts: 0,
    });

    // Fetch data when component mounts or when selectedYear changes
    useEffect(() => {
        fetchMockData(selectedYear).then(fetchedData => {
            setData(fetchedData);
            setCounts({
                posts: fetchedData.products,
                engagements: fetchedData.categories,
                mentions: fetchedData.customers,
                alerts: fetchedData.alerts,
            });
        });
    }, [selectedYear]);

    // Handle year change
    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    // Increment card values every second
    useEffect(() => {
        const interval = setInterval(() => {
            setCounts(prevCounts => ({
                posts: prevCounts.posts + Math.floor(Math.random() * 10), // Increment by a random number
                engagements: prevCounts.engagements + Math.floor(Math.random() * 10),
                mentions: prevCounts.mentions + Math.floor(Math.random() * 10),
                alerts: prevCounts.alerts + Math.floor(Math.random() * 10),
            }));
        }, 1000); // 1 second interval

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <main className="main-container">
            
            <div className="main-title">
                <h3>FOLLOWERS</h3>
                <select onChange={handleYearChange} value={selectedYear} className="year-filter">
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
            </div>

            <div className="main-cards">
                <div className="card">
                    <div className="card-inner">
                        <h3>POSTS</h3>
                        <BsFillArchiveFill className="card_icon" />
                    </div>
                    <h1>{counts.posts}</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>ENGAGEMENTS</h3>
                        <BsFillGrid3X3GapFill className="card_icon" />
                    </div>
                    <h1>{counts.engagements}</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>MENTIONS</h3>
                        <BsPeopleFill className="card_icon" />
                    </div>
                    <h1>{counts.mentions}</h1>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <h3>ALERTS</h3>
                        <BsFillBellFill className="card_icon" />
                    </div>
                    <h1>{counts.alerts}</h1>
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
                    <LineChart data={data.lineData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Likes" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Comments" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>

                {/* Bar Chart */}
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data.barData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="New_Users" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}

export default Home;
