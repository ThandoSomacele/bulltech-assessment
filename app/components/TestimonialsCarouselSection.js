import Image from 'next/image';

export default function TestimonialsCarouselSection() {
  const testimonials = [
    {
      text: 'One of the standout features of this gaming website is its extensive library of game guides and tutorials. It has helped me level up my skills, conquer challenging quests, and discover hidden secrets within games. The guides are comprehensive, easy to follow, and have undoubtedly elevated my gaming performance.',
      Image: '/testimonials-images/arlene.png',
      name: 'Arlene McCoy',
      company: "McDonald's",
    },
    {
      text: "Another aspect that sets this website apart is its vibrant and passionate community. The forum section provides a platform for gamers from all walks of life to connect, share their experiences, and discuss their favorite titles. I've made valuable friendships and found like-minded individuals who share my enthusiasm for gaming.",
      Image: '/testimonials-images/kathryn.png',
      name: 'Kathryn Murphy',
      company: 'General Electric',
    },
  ];

  return (
    <section>
      <div className='container py-20 '>
        <div className='testimonials flex gap-8 flex-wrap lg:flex-nowrap'>
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className='flex flex-col gap-5 rounded-lg p-6 py-10 lg:p-12 relative border border-black border-opacity-20'>
              <div className='space-y-2'>
                <div className='flex gap-1 justify-center lg:justify-start'>
                  <Image src='/icons/star-plain.svg' alt='plain star icon' width={21} height={21} />
                  <Image src='/icons/star-plain.svg' alt='plain star icon' width={21} height={21} />
                  <Image src='/icons/star-plain.svg' alt='plain star icon' width={21} height={21} />
                  <Image src='/icons/star-plain.svg' alt='plain star icon' width={21} height={21} />
                  <Image src='/icons/star-plain.svg' alt='plain star icon' width={21} height={21} />
                </div>
                <p className='text-[16px] text-center lg:text-left'>{testimonial.text}</p>
              </div>
              <hr className='border-t gradient-white-border' />
              <div className='flex justify-between'>
                <div className='flex gap-x-3 items-center'>
                  <Image
                    src={testimonial.Image}
                    className='w-[60px] object-contain'
                    width={60}
                    height={60}
                    alt={`${testimonial.name}'s profile image`}
                  />
                  <div className='leading-relaxed'>
                    <p className='text-[17px]'>{testimonial.name}</p>
                    <p className='text-[10px]'>{testimonial.company}</p>
                  </div>
                </div>
                <p className='flex gap-1 text-sm items-center'>
                  <span>
                    <Image
                      src='/icons/verified.png'
                      width={18}
                      height={18}
                      className='object-contain'
                      alt='verified icon'
                    />
                  </span>
                  Verifed
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
