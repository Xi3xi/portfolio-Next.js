"use client";

import { motion } from "framer-motion";
import React from "react";
import { inter, libreBaskerville, rowdies } from '../app/fonts'
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { FlipWords } from "./ui/FlipWords";
import LitUpButton from "./ui/LitUpButton";
import { FaLocationArrow } from "react-icons/fa";
import { Photo } from '../components/Photo';

//rafce in Es7+
const Intro = () => {
    const roles = ['FrontEnd', "BackEnd", "DevOps", "Game"];

  return (
    <div className='pb-20 pt-0'>
        <div className="absolte top-0 left-0">
        <Spotlight
            className="bottom-10 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
        />
        <Spotlight
            className="top-10 left-full h-[80vh] w-[80vw]"
            fill="purple"
        />
        <Spotlight
            className="top-28 left-8 h-[80vh] w-[50vw]"
            fill="lightblue"
        />
        </div>
        
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className=""
            >
            <div className="h-screen w-full dark:bg-transparent bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.00] 
            flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>
            <div className="h-screen flex justify-center items-center relative my-20 z-10 flex-row gap-12">
                <div className="max-w-[90vw] md:max-w-xl lg:max-w-[60vw] flex flex-col">
                    <div className="text-3xl md:text-7xl font-bold text-white text-left">
                        <h1 className={rowdies.className}>Hi, It's Jade </h1>                                                       
                    </div>
                    <div className="px-0 pt-8">
                        <div className="text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                            I'm a
                            <FlipWords words={roles} />Engineer<br />
                        </div>
                    </div>
                    <TextGenerateEffect
                        className="text-justify text-2xl md:max-w-5xl lg:text-6xl  items-center justify-center"
                         words="As a highly motivated and innovative software engineering graduate, I recently completed my Master's degree at the University of Melbourne in mid-2024.
                        With over two years of experience in both front-end and back-end web application development, I have developed proficiency in Java, React, SQL, Spring Boot, and RESTful APIs, among other technologies. "
                    />
                    <a href="#about">
                        <LitUpButton
                            title="Display"
                            icon={<FaLocationArrow />}
                            position="right"
                            otherClasses="justify-center items-center"
                        />
                    </a>
                </div>    
                <Photo />
            </div>
        </motion.div>
    </div>
  )
}

export default Intro