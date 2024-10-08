import Image from 'next/image';
import Link from 'next/link';

export default function FooterSection() {
  const footerColumnLinks = [
    {
      title: 'Company',
      navItems: [
        { name: 'Calling Plans', href: '#' },
        { name: 'Session Border', href: '#' },
        { name: 'PABX Telephony', href: '#' },
        { name: 'Contact Center', href: '#' },
        { name: 'Networking and Security', href: '#' },
        { name: 'Linux Systems', href: '#' },
        { name: 'Call & Network Monitoring', href: '#' },
      ],
    },
    {
      title: 'Company',
      navItems: [
        { name: 'About Us', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Partners', href: '#' },
        { name: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Links',
      navItems: [
        { name: 'help', href: '#' },
        { name: 'terms & conditions', href: '#' },
        { name: 'Privacy Policy', href: '#' },
      ],
    },
  ];

  return (
    <section className='bg-green-900 text-white w-full bg-cover bg-no-repeat mix-blend-color-dodge'>
      <footer className='container flex flex-wrap pt-20 lg:pt-36 pb-10 w-full justify-start gap-16 lg:gap-20 '>
        <div className='flex flex-col lg:w-1/4 space-y-10'>
          <Link href={'/'}>
            <Image
              src='/assets/logo-white.png'
              width='96'
              height='19'
              alt='snap logo'
              className='object-contain w-60'
            />
          </Link>
          <p className='text-base'>
            BullTech (Pty) Ltd. is a member of the ODEK Alliance.
            <br />
            <br />
            The ODEK Alliance is a group of independent member companies, artfully chosen for the products and services
            they offer.
            <br />
            <br />
            The Alliance fosters collaboration to drive creativity and innovation. Honesty, positivity and progress
            drive our members to offer ever-better solutions for your business.
            <br />
            <br />
            Members share a common ethos of customer commitment, fairness and excellence, which act as an anchor for all
            business practice.
          </p>
        </div>
        {/* --- Footer Nav Columns --- */}
        {footerColumnLinks.map((column, i) => (
          <div key={i} className={`col-${i + 1} flex flex-col space-y-5 text-lg`}>
            <p className='uppercase font-extrabold'>{column.title}</p>
            <ul className='space-y-6'>
              {/* --- Footer Links --- */}
              {column.navItems.map((item, i) => (
                <li key={i}>
                  <a className='capitalize' href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <small>© Copyright 2023, All Rights Reserved</small>
      </footer>
    </section>
  );
}
