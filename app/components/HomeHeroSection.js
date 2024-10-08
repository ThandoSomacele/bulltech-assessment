import Button from './ui/Button';

export default function HeaderSection() {
  const records = [
    { number: '100%', title: 'Bespoke Services' },
    { number: '200+', title: 'Project Finished' },
    { number: '500+', title: 'Happy Customer' },
  ];

  return (
    <header className='bg-[url("/assets/home-hero.png")] bg-cover bg-center'>
      <div className='container flex flex-col gap-5 lg:h-[90vh] py-10 md:max-h-[1000px] items-start justify-center text-white'>
        <h1 className='h1 w-full lg:w-1/2'>
          Network, Telecommunications &&nbsp;Linux <span className='gradient-text'>Specialists</span>
        </h1>
        <p className='w-full lg:w-1/2 text-sm lg:text-lg'>
          Playing electronic games, whether through consoles, computers, mobile&nbsp;phones or another medium
          altogether. Gaming is a nuanced term&nbsp;that suggests regular gameplay, possibly as a hobby.
        </p>
        <div className='flex gap-2 lg:gap-5'>
          <Button
            btnStyle='fill'
            btnText='Call Now'
            href='https://github.com/ThandoSomacele/bulltech-assessment'
            target={true}
          />
          <Button
            btnStyle='outline'
            btnText='Free Consultation'
            href='https://github.com/ThandoSomacele/bulltech-assessment'
            target={true}
          />
        </div>
        <div className='lg:flex gap-8 mt-12 justify-start hidden'>
          {records.map(record => (
            <div key={record.title} className='text-center'>
              {record.number.includes('200') ? (
                <p className='h2 gradient-text'>{record.number}</p>
              ) : (
                <p className='h2'>{record.number}</p>
              )}
              <p>{record.title}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
