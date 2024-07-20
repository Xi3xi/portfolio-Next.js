import React from 'react'
import { CuteButton } from '../components/CuteButton';
import { socialMedia } from '@/data';
import LitUpButton from './ui/LitUpButton';
import { BsChatLeftHeart } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5 text-zinc-100" id="contact">
      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw]">
          Contact <span className="text-purple">Me</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me to discuss anything that interests you, or share any suggestions for improvement. 
            <span className="text-violet-400"> Your feedback is always welcome!</span>
        </p>
        <a href="xin.xiang2024@gmail.com">
          <LitUpButton 
            title="Let's get in touch" 
            icon={<BsChatLeftHeart />}
            position="right"        
         />

        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Xin Xiang
        </p>

        <div className="flex items-center md:gap-2 gap-4">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-12 h-12 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-45 bg-stone-700 rounded-lg border border-black-300 mt-2"
            >
              <img src={info.img} alt="icons" width={22} height={22} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer