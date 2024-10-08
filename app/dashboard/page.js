'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './../contexts/AuthContext';
import { Cloud } from 'lucide-react';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const router = useRouter();
  const { token, logout } = useAuth();

  useEffect(() => {
    if (!token) {
      router.push('/login');
    } else {
      fetchData();
    }
  }, [token, router]);

  const fetchData = async () => {
    try {
      const weatherResponse = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=-26.2023&longitude=28.0436&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m'
      );
      const weatherData = await weatherResponse.json();
      setWeather(weatherData);

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (isLoading) return <div className='flex h-screen items-center justify-center'>Loading...</div>;

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <div className='mx-auto max-w-7xl'>
        <h1 className='mb-8 text-4xl font-bold text-gray-800'>Dashboard</h1>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <Widget title='Johannesburg Weather' icon={<Cloud className='h-6 w-6 text-green-500' />}>
            {weather && (
              <div className='text-gray-700'>
                <p className='text-3xl font-bold'>{weather.current_weather.temperature}°C</p>
                <p>Wind: {weather.current_weather.windspeed} km/h</p>
                <p>Humidity: {weather.hourly.relativehumidity_2m[0]}%</p>
              </div>
            )}
          </Widget>
        </div>
        <button
          onClick={handleLogout}
          className='mt-8 rounded-full bg-green-500 px-6 py-2 font-semibold text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'>
          Logout
        </button>
      </div>
    </div>
  );
}

function Widget({ title, children, icon }) {
  return (
    <div className='rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
        {icon}
      </div>
      {children}
    </div>
  );
}
