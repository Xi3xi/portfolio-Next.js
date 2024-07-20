import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3DPinCard'
import { libreBaskerville } from '@/app/fonts'
import { AnimatedTooltip } from './ui/ToolTip'
import { BsChevronCompactRight} from 'react-icons/bs'
import { FiArrowUpRight, FiLink } from 'react-icons/fi'

const PreProjects = () => {
  return (
    <div className='py-20'  id='projects'>
      <h1 className="heading text-slate-200">
        Recent{" "} <span className="text-purple">projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-8 mt-10 text-slate-100'>
        {projects.map(({
          id, title, des, img, iconLists, link
        }) => (
          <div 
            key={id} 
            className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex flex-row items-center justify-center sm:w-[500px] w-[80vw]'
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex justify-center sm:w-[500px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div 
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-slate-800">
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={img}
                  alt="cover"
                  className="z-10 absolute bottom-0 scale-105"
                />
              </div>
              <h1 className={`${libreBaskerville.className} font-bold lg:text-2xl md:text-xl text-base line-clamp-1`}>
                {title}
              </h1>
              <p
                className="relative z-20 lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">  
                    <AnimatedTooltip items={iconLists} />
                </div>
                <div className="flex justify-center items-center gap-2">
                  <p className="flex lg:text-xl md:text-sm text-base text-lime-50">
                    Click To Live Site 
                  </p>
                  <FiLink />

                </div>
                
            </div>
            </PinContainer>     
          </div>
        ))}

      </div>
    </div>
  )
}

export default PreProjects