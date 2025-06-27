import { useState, useEffect } from 'react';

const Footer = () => {
  const [codingHours, setCodingHours] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodingTime = async () => {
      try {
        const response = await fetch('/api/wakatime');
        const data = await response.json();
        if (response.ok) {
          setCodingHours(data.hours);
        } else {
          throw new Error(data.error || 'Failed to fetch coding time');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCodingTime();
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <p>© 2023 My Course Portfolio</p>
        </div>
        <div>
          {error ? (
            <p className="text-red-400">Error: {error}</p>
          ) : codingHours !== null ? (
            <p>Total coding time: <span className="font-bold">{codingHours}</span> hours</p>
          ) : (
            <p>Loading coding time...</p>
          )}
        </div>
      </div>
    </footer>
  );
};

'use client'; // Next.js 13+需要添加这个指令

import { useEffect, useState } from 'react';

export default function Footer() {
  const [codingHours, setCodingHours] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWakaTimeStats = async () => {
      try {
        const mockData = { data: { total_seconds: 7200 } }
        const duration = mockData.data?.total_seconds 
          ? Math.round(mockData.data.total_seconds / 3600) + ' 小时 分钟'
          : '数据不可用'
        const element = document.getElementById('wakatime-stats')
        if (element) element.textContent = duration
      } catch (error) {
        const element = document.getElementById('wakatime-stats')
        if (element) element.textContent = '数据加载失败'
      }
    }
    
    fetchData();
  }, []);

  return (
    <footer className="bg-gray-100 py-4 text-center">
      <div className="container mx-auto">
        {error ? (
          <p className="text-red-500">统计加载失败</p>
        ) : codingHours !== null ? (
          <p>
            <span className="font-semibold">总编程时长:</span> 
            {codingHours} 小时
          </p>
        ) : (
          <p>加载编程统计中...</p>
        )}
      </div>
    </footer>
  );
}