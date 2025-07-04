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