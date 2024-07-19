'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./BackgroundAnimation";
import { Globe } from "./GridGlobe";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import Lottie from "react-lottie";
import LitUpButton from "./LitUpButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 md:grid-row-7 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  imgClassName,
  titleClassName,
  img,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = "xin.xiang2024@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
      };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white[0.05] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: "transparent"
      }}
    >
        <div className={`${id === 6 && 'flex justify-center'} h-full'`}>
            <div className="w-full h-full absolute">
                {img && (
                    <img
                        src={img}
                        alt={img}
                        className={cn(imgClassName,  'object-cover, object-center')}
                    />
                )}
            </div>  
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}>
            <div className="font-normal text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                {description}
            </div>
            <div className="font-sans font-bold text-base lg:text-2xl max-w-96 z-10 text-stone-50">
                {title}
            </div>
        

        {/* Global animation in Card 2 */}
        {id === 2 && <Globe />}

        {/* Skillset in Card 3 */}
        {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            {/* tech stack lists */}
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                    {['React.js', 'Next.js', 'TypeScript','JavaScript'].map((item) => (
                        <span
                            key={item}
                            className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#2d2d2d5f] text-slate text-slate-100"
                        >
                            {item}
                        </span>
                    ))}
                    <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#28282873] text-slate-300"></span>
                </div>
                
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                    <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#5a5a5a3c] text-slate-300"></span>
                    {['AWS', 'Spring Boot', 'Buildkite','PostgreDB'].map((item) => (
                        <span
                            key={item}
                            className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#4854b151] text-slate text-slate-100"
                        >
                            {item}
                        </span>
                    ))}
                    
                </div>
          </div>
        )}
        {id === 6 &&(
            <div className="mt-5 relative">
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
                    title={copied ? 'Email copied' : 'Contact me'}
                    icon={<IoCopyOutline />}
                    position="left"
                    handleClick={handleCopy}
                    otherClasses="!bg-[#161A31]"
                 />
            </div>
        )}

    </div>
    </div>
  );
};
