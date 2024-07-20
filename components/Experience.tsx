import React from 'react'
import { InfiniteMovingCards } from './ui/MovingCard'
import { companies, testimonials } from '@/data'
import { Button } from './ui/MovingBorder'

const Experience = () => {
  return (
    <div className='py-20'  id='experience'>
        <h1 className="heading text-slate-200">
            Experience
        </h1>
        <div className='flex flex-col items-center max-lg:mt-10'>
        <InfiniteMovingCards 
            items={testimonials}
            direction='right'
            speed='slow'
        />

        <div className='flex w-full items-center justify-center gap-6 md:gap-40 max-lg: mt-10 animate-scroll antialiased'>
            {companies.map(({id, img, name, nameImg}) => (
                <div key={id} className="flex w-full " >
                    <Button 
                        key={id}
                        className='flex  gap-3' 
                        borderRadius='1.75rem'
                        duration={Math.floor(Math.random() * 10000) + 10000}>
                    <img
                        src={img}
                        alt={name}
                        className="md:w-10 w-5"
                    />
                    <img
                        src={nameImg}
                        alt={name}
                        width={id === 4 || id === 5 ? 100 : 150}
                        className="md:w-20 w-20"
                    />
                    </Button>
                </div>
            ))}
        </div>
        
      </div>
    </div>
  )
}

export default Experience