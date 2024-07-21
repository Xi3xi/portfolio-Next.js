'use client'

import React from 'react'
import { useState } from "react";
import { CuteButton } from '../components/CuteButton';
import { socialMedia } from '@/data';
import LitUpButton from './ui/LitUpButton';
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
import { BsChatLeftHeart } from 'react-icons/bs';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "xin.xiang2024@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5 text-zinc-100" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="flex flex-col items-center ">
        <h1 className="heading lg:max-w-[45vw]">
          Contact <span className="text-purple">Me</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me to discuss anything that interests you, or share any suggestions for improvement. 
            <span className="text-violet-400"> Your feedback is always welcome!</span>
        </p>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <div className={`absolute -bottom-5 right-0`}>
            <Lottie options={{
                loop: copied,
                autoplay: copied,
                animationData: animationData,
                rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              }
            }} />
          </div>

          <LitUpButton 
            title={copied ? 'Email copied' : "Lets get in touch"}
            icon={<BsChatLeftHeart />}
            position="right"   
            handleClick={handleCopy} 
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