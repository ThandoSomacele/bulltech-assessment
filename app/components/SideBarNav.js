'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from './../contexts/AuthContext';

function SideBarNav() {
  const [showSidebar, setShowSidebar] = useState('right-[-100%]');
  const [showBgFilter, setShowBgFilter] = useState('hidden');
  const featureContent = useRef();
  const companyContent = useRef();
  const [isFeatureCollapsed, setIsFeatureCollapsed] = useState(true);
  const [isCompanyCollapsed, setIsCompanyCollapsed] = useState(true);
  const [isFeautureRotated, setIsFeatureRotated] = useState(false);
  const [isCompanyRotated, setIsCompanyRotated] = useState(false);
  const { token, logout } = useAuth();

  const handleSidebarNav = () => {
    setShowSidebar(prev => (prev === 'right-[-100%]' ? 'right-0' : 'right-[-100%]'));
    setShowBgFilter(prev => (prev === 'hidden' ? 'flex' : 'hidden'));
  };

  const handleFeatureCollapse = () => {
    setIsFeatureCollapsed(!isFeatureCollapsed);
    setIsFeatureRotated(!isFeautureRotated);
  };

  const handleCompanyCollapse = () => {
    setIsCompanyCollapsed(!isCompanyCollapsed);
    setIsCompanyRotated(!isCompanyRotated);
  };

  const handleLogout = () => {
    logout();
    handleSidebarNav();
  };

  const featureContentStyle = {
    maxHeight: isFeatureCollapsed ? '0px' : `${featureContent.current?.scrollHeight}px`,
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-out',
  };

  const companyContentStyle = {
    maxHeight: isCompanyCollapsed ? '0px' : `${companyContent.current?.scrollHeight}px`,
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-out',
  };

  return (
    <>
      <div className='mobile-header md:p-8 p-4 lg:hidden flex justify-between w-screen'>
        <Link href={'/'}>
          <Image src='/assets/logo.png' width='96' height='19' alt='snap logo' className='object-con`tain w-40' />
        </Link>
        <Image
          className='object-contain lg:hidden'
          src='/icons/icon-menu.svg'
          width='32'
          height='32'
          alt='snap logo'
          onClick={handleSidebarNav}
        />
      </div>
      <div
        className={`lg:hidden ${showBgFilter} mobile-bg-filter w-screen h-screen bg-black bg-opacity-70 absolute top-0 right-0 flex justify-end items-start overflow-hidden`}
        onClick={handleSidebarNav}></div>
      <div
        className={`fixed top-0 ${showSidebar} flex transition-all duration-1000 bg-white w-2/3 h-screen px-6 py-4 flex-col justify-start items-end z-50`}>
        <Image
          className='object-contain lg:hidden'
          src='/icons/icon-close-menu.svg'
          width={32}
          height={32}
          alt='snap logo'
          onClick={handleSidebarNav}
        />
        <nav className='lg:hidden w-full text-sm py-5 md:px-10 tracking-[0.5px]'>
          <ul className='flex flex-col gap-6 text-medium_gray'>
            <li>
              <button className='flex gap-3 items-center' onClick={handleFeatureCollapse}>
                Features{' '}
                <Image
                  className={`${isFeautureRotated ? 'rotate-180' : 'rotate-0'} object-contain`}
                  src='/icons/icon-arrow-down.svg'
                  width={11}
                  height={11}
                  alt='dropdown icon'
                />
              </button>
              <ul className='px-5 flex flex-col gap-5' style={featureContentStyle} ref={featureContent}>
                <li>
                  <Link
                    className='flex mt-5 items-center gap-4'
                    href='https://github.com/ThandoSomacele/bulltech-assessment'
                    target='_blank'>
                    <Image
                      className='object-contain'
                      src='/icons/icon-todo.svg'
                      width={16}
                      height={16}
                      alt='todo icon'
                    />
                    Todo List
                  </Link>
                </li>
                <li className='flex items-center gap-4'>
                  <Image
                    className='object-contain'
                    src='/icons/icon-calendar.svg'
                    width={16}
                    height={16}
                    alt='calendar icon'
                  />
                  Calendar
                </li>
                <li className='flex items-center gap-4'>
                  <Image
                    className='object-contain'
                    src='/icons/icon-reminders.svg'
                    width={16}
                    height={16}
                    alt='reminders icon'
                  />
                  Reminders
                </li>
                <li className='flex items-center gap-4'>
                  <Image
                    className='object-contain'
                    src='/icons/icon-planning.svg'
                    width={16}
                    height={16}
                    alt='planning icon'
                  />
                  Planning
                </li>
              </ul>
            </li>
            <li>
              <button className='flex gap-3 items-center' onClick={handleCompanyCollapse}>
                Company
                <Image
                  className={`${isCompanyRotated ? 'rotate-180' : 'rotate-0'} object-contain`}
                  src='/icons/icon-arrow-down.svg'
                  width={11}
                  height={11}
                  alt='dropdown icon'
                />
              </button>
              <ul className='px-5 flex flex-col gap-5' style={companyContentStyle} ref={companyContent}>
                <li className='flex mt-5 items-center gap-4'>
                  <Link href='https://github.com/ThandoSomacele/bulltech-assessment' target='_blank'>
                    History
                  </Link>
                </li>
                <li className='flex items-center gap-4'>Our Team</li>
                <li className='flex items-center gap-4'>Blog</li>
              </ul>
            </li>
            <li>
              <Link href='https://github.com/ThandoSomacele/bulltech-assessment' target='_blank'>
                Careers
              </Link>
            </li>
            <li>
              <Link href='https://github.com/ThandoSomacele/bulltech-assessment' target='_blank'>
                About
              </Link>
            </li>
          </ul>
          <div className='register-btns-mobile mt-8 flex flex-col gap-3 group-open:-rotate-180gap-10 items-center text-medium_gray'>
            {token ? (
              <>
                <Link
                  href='/dashboard'
                  className='bg-green-500 text-white px-6 py-2.5 w-full rounded-2xl text-center hover:bg-green-600 transition-colors'
                  onClick={handleSidebarNav}>
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className='border-2 border-medium_gray px-6 py-2.5 w-full rounded-2xl text-center hover:border-green-600 hover:text-green-600 transition-colors'>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href='/login' className='hover:text-green-600' onClick={handleSidebarNav}>
                  Login
                </Link>
                <Link
                  className='border-2 border-medium_gray px-6 py-2.5 w-full rounded-2xl text-center hover:border-green-600 hover:text-green-600 transition-colors'
                  href='#'
                  onClick={handleSidebarNav}>
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default SideBarNav;
