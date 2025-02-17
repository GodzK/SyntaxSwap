"use client"
import React from 'react'
import "./landingpage.css"
import Link from 'next/link';
import BlurText from "../components/BlurText";
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
function landingpage() {
  return (
    <div className='homepage-container'>
        <BlurText
  text="SYNTAX SWAPPER"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-8xl mb-8 pb-10 font-extrabold text-white"
/>
    <Link href="/compare"><button className='button-86' >Get Started!</button></Link> 
    </div>
  )
}

export default landingpage