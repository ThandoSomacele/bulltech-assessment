'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    console.log('Attempting login with:', { email, password: pwd });

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: pwd }),
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful, received data:', data);
        login(data.token);
        router.push('/dashboard');
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        setErrorMsg(errorData.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMsg('An error occurred. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-md'>
        <form onSubmit={handleSubmit} className='mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md'>
          <div className='mb-4'>
            <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='email'>
              Email
            </label>
            <input
              className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
              id='email'
              type='email'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-6'>
            <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='password'>
              Password
            </label>
            <input
              className='focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
              id='password'
              type='password'
              placeholder='******************'
              value={pwd}
              onChange={e => setPwd(e.target.value)}
              required
            />
          </div>
          {errorMsg && <p className='mb-4 text-xs italic text-red-500'>{errorMsg}</p>}
          <div className='flex items-center justify-between'>
            <button
              className='focus:shadow-outline rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 focus:outline-none'
              type='submit'
              disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
