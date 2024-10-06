'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './../contexts/AuthContext';

const dummyData = {
  calls: [
    { id: 1, duration: '5:23', caller: 'John Doe' },
    { id: 2, duration: '3:15', caller: 'Jane Smith' },
    { id: 3, duration: '1:47', caller: 'Bob Johnson' },
  ],
  weather: {
    temp: 72,
    condition: 'Sunny',
    humidity: 45,
  },
  quotes: [
    { id: 1, text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
    { id: 2, text: "Life is what happens when you're busy making other plans.', author: 'John Lennon" },
  ],
};

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { token, logout } = useAuth();

  useEffect(() => {
    if (!token) {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [token, router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='mb-4 text-3xl font-bold'>Dashboard</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <Widget title='Recent Calls'>
          <ul>
            {dummyData.calls.map(call => (
              <li key={call.id} className='mb-2'>
                {call.caller} - {call.duration}
              </li>
            ))}
          </ul>
        </Widget>
        <Widget title='Weather'>
          <p>Temperature: {dummyData.weather.temp}°F</p>
          <p>Condition: {dummyData.weather.condition}</p>
          <p>Humidity: {dummyData.weather.humidity}%</p>
        </Widget>
        <Widget title='Inspirational Quotes'>
          {dummyData.quotes.map(quote => (
            <blockquote key={quote.id} className='mb-2 italic'>
              "{quote.text}" - {quote.author}
            </blockquote>
          ))}
        </Widget>
      </div>
      <button
        onClick={handleLogout}
        className='mt-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600'>
        Logout
      </button>
    </div>
  );
}

function Widget({ title, children }) {
  return (
    <div className='rounded-lg bg-white p-4 shadow'>
      <h2 className='mb-2 text-xl font-semibold'>{title}</h2>
      {children}
    </div>
  );
}
