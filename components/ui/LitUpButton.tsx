import React from 'react'

const LitUpButton = ({
    title, icon, position, handleClick, otherClasses} : {
        title: string;
        icon: React.ReactNode;
        position: string;
        handleClick?: () => void;
        otherClasses?: string;
    }
) => {
  return (
    <button className="p-[2px] relative inline-flex h-12 w-full md:w-60 md:mt-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-400 to-purple rounded-lg" />
        <div className={`font-bold inline-flex h-full w-full cursor-pointer items-center justify-center px-7 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent gap-2 ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </div>
    </button>
  )
}

export default LitUpButton