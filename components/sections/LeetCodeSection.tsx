'use client';

import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  contestRating: number;
}

export default function LeetCodeSection() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeetCodeStats();
  }, []);

  const fetchLeetCodeStats = async () => {
    // Using mock data as LeetCode API requires authentication
    // In production, you would use a backend service to fetch this data
    const mockStats: LeetCodeStats = {
      totalSolved: 150,
      easySolved: 80,
      mediumSolved: 55,
      hardSolved: 15,
      ranking: 125000,
      contestRating: 1650
    };

    setTimeout(() => {
      setStats(mockStats);
      setLoading(false);
    }, 500);
  };

  if (loading) {
    return (
      <section id="leetcode" className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading LeetCode stats...</div>
      </section>
    );
  }

  if (!stats) return null;

  const problemsData = [
    { name: 'Easy', value: stats.easySolved, color: '#3DDC84' },
    { name: 'Medium', value: stats.mediumSolved, color: '#FFA726' },
    { name: 'Hard', value: stats.hardSolved, color: '#EF5350' }
  ];

  const performanceData = [
    { name: 'Contest Rating', value: stats.contestRating },
    { name: 'Ranking', value: Math.floor(stats.ranking / 1000) } // Scaled for visualization
  ];

  return (
    <section id="leetcode" className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#3DDC84]">
          LeetCode Statistics
        </h2>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-[#3DDC84]">{stats.totalSolved}</div>
            <div className="text-gray-400 text-sm mt-1">Total Solved</div>
          </div>
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-[#3DDC84]">{stats.easySolved}</div>
            <div className="text-gray-400 text-sm mt-1">Easy</div>
          </div>
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-[#FFA726]">{stats.mediumSolved}</div>
            <div className="text-gray-400 text-sm mt-1">Medium</div>
          </div>
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold text-[#EF5350]">{stats.hardSolved}</div>
            <div className="text-gray-400 text-sm mt-1">Hard</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Doughnut Chart */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-center">Problems Solved by Difficulty</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={problemsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {problemsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #3DDC84' }}
                  labelStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-center">Performance Metrics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #3DDC84' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="value" fill="#3DDC84" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#3DDC84]/10 to-transparent rounded-lg p-6 backdrop-blur-sm border border-[#3DDC84]/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-400 text-sm mb-1">Contest Rating</div>
                <div className="text-4xl font-bold text-[#3DDC84]">{stats.contestRating}</div>
              </div>
              <div className="text-6xl opacity-10">🏆</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#3DDC84]/10 to-transparent rounded-lg p-6 backdrop-blur-sm border border-[#3DDC84]/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-400 text-sm mb-1">Global Ranking</div>
                <div className="text-4xl font-bold text-[#3DDC84]">
                  {stats.ranking.toLocaleString()}
                </div>
              </div>
              <div className="text-6xl opacity-10">📊</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
