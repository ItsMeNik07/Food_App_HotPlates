import React from 'react'
import { AiFillHeart } from "react-icons/ai";
function Trust() {
  const handleClick = () => {
  const target = document.getElementById("testimonials");
  target?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <button onClick={handleClick} className='bg-[#fe0100] p-2 xl:p-4 rounded-full flex justify-center items-center gap-2 text-xs 2xl:text-3xl 2xl:p-7 tracking-widest hover:bg-red-600'>
        <span className='text-[#fe0100] bg-white p-1 rounded-full '><AiFillHeart /></span>
        <span className='text-white'>People Trust Us</span>
    </button>
  )
}

export default Trust