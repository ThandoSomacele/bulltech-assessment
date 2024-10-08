'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const [displayFetures, setDisplyFeature] = useState('hidden');
  const [displayComapany, setDisplyCompany] = useState('hidden');

  const toggleFeatures = () => {
    displayFetures === 'hidden' ? setDisplyFeature('flex') : setDisplyFeature('hidden');
  };
  const toggleCompany = () => {
    displayComapany === 'hidden' ? setDisplyCompany('flex') : setDisplyCompany('hidden');
  };

  return (
    <div className='container py-6 lg:flex items-center justify-start gap-16 hidden'>
      <Link href={'/'}>
        <Image src='/assets/logo.png' width='96' height='19' alt='snap logo' className='object-contain w-40' />
      </Link>
      <nav className='lg:flex items-center justify-between w-full hidden lg:text-sm tracking-[0.5px]'>
        <ul className='flex gap-10 text-medium_gray'>
          <li>
            <Link
              href={'#'}
              className='group focus:text-almost_black flex gap-1.5 items-center hover:text-almost_black'
              onClick={toggleFeatures}>
              Features{' '}
              <Image
                className='object-contain group-focus:rotate-180'
                src='/icons/icon-arrow-down.svg'
                width={10}
                height={10}
                alt='dropdown icon'
              />
            </Link>
            <ul
              className={`${displayFetures} bg-white absolute p-6 flex-col gap-3 rounded-xl -ml-[5%] mt-3.5 text-[13px] z-50`}
              style={{ boxShadow: '0 10px 50px -8px rgba(0, 0, 0, 0.25)' }}>
              <li>
                <Link
                  className='hover:text-[#726CEE] flex items-center gap-4'
                  href='https://github.com/ThandoSomacele/bulltech-assessment'
                  target='_blank'
                  onClick={toggleFeatures}>
                  <Image className='object-contain' src='/icons/icon-todo.svg' width={14} height={14} alt='todo icon' />
                  Todo List
                </Link>
              </li>
              <li>
                <Link className='hover:text-[#4BB1DA] flex items-center gap-4' href={'#'} onClick={toggleFeatures}>
                  <Image
                    className='object-contain'
                    src='/icons/icon-calendar.svg'
                    width={14}
                    height={14}
                    alt='calendar icon'
                  />
                  Calendar
                </Link>
              </li>
              <li>
                <Link className='hover:text-[#EDD556] flex items-center gap-4' href={'#'} onClick={toggleFeatures}>
                  <Image
                    className='object-contain'
                    src='/icons/icon-reminders.svg'
                    width={14}
                    height={14}
                    alt='reminders icon'
                  />
                  Reminders
                </Link>
              </li>
              <li>
                <Link className='hover:text-[#8E4CB6] flex items-center gap-4' href={'#'} onClick={toggleFeatures}>
                  <Image
                    className='object-contain'
                    src='/icons/icon-planning.svg'
                    width={14}
                    height={14}
                    alt='planning icon'
                  />
                  Planning
                </Link>
              </li>
            </ul>
            <div className={`${displayFetures} w-screen h-screen absolute top-0 right-0`} onClick={toggleFeatures} />
          </li>
          <li>
            <Link
              href={'#'}
              className='group focus:text-almost_black flex gap-1.5 items-center hover:text-almost_black'
              onClick={toggleCompany}>
              Company{' '}
              <Image
                className='group-focus:rotate-180 object-contain'
                src='/icons/icon-arrow-down.svg'
                width={10}
                height={10}
                alt='dropdown icon'
              />
            </Link>
            <ul
              className={`${displayComapany} absolute p-6 flex-col gap-3 rounded-xl mt-3.5 text-s bg-white z-50`}
              style={{ boxShadow: '0 10px 50px -8px rgba(0, 0, 0, 0.25)' }}>
              <li>
                <Link
                  className='hover:text-almost_black'
                  href='https://github.com/ThandoSomacele/bulltech-assessment'
                  target='_blank'
                  onClick={toggleCompany}>
                  History
                </Link>
              </li>
              <li>
                <Link className='hover:text-almost_black' href={'#'} onClick={toggleCompany}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link className='hover:text-almost_black' href={'#'} onClick={toggleCompany}>
                  Blog
                </Link>
              </li>
            </ul>
            <div className={`${displayComapany} w-screen h-screen absolute top-0 right-0`} onClick={toggleCompany} />
          </li>
          <li>
            <Link
              className='hover:text-almost_black'
              href='https://github.com/ThandoSomacele/bulltech-assessment'
              target='_blank'>
              Careers
            </Link>
          </li>
          <li>
            <Link
              className='hover:text-almost_black'
              href='https://github.com/ThandoSomacele/bulltech-assessment'
              target='_blank'>
              About
            </Link>
          </li>
        </ul>
        <div className='register-btns flex gap-10 items-center text-medium_gray'>
          <Link className='hover:text-almost_black' href='/login'>
            Login
          </Link>
          <Link
            className='border-2 border-medium_gray px-6 py-2.5 rounded-2xl hover:text-almost_black hover:border-almost_black'
            href='#'>
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
