import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { Link } from 'react-router-dom'


function ButtonBelowSlogan() {
  return (
    <div className="flex justify-center">
     <Link to="menu"> <button className="bg-yellow-500 text-black py-3 rounded-full text-md font-semibold hover:bg-yellow-600 transition duration-300 flex justify-center items-center gap-2 px-8 xl:h-16 2xl:h-28 2xl:text-4xl 2xl:w-[19vw] 2xl:p-9 tracking-widest">
        Explore Our Menu
        <IoIosArrowForward />
      </button>
      </Link>
    </div>
  )
}

export default ButtonBelowSlogan
