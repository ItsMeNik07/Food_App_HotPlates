import React from 'react'
import BurgerHome2 from '../assets/BurgerHome3.png'
import BurgerMobile2 from '../assets/BurgerMobile2.png'

function HomeImage() {
  return (
    <div className="w-full h-full flex justify-center md:justify-end">
      {/* Mobile Image */}
      <img
        src={BurgerMobile2}
        className="md:hidden object-contain"
        alt="Burger Mobile"
      />

      {/* Desktop Image */}
      <img
        src={BurgerHome2}
        className="object-cover hidden md:block w-full h-full"
        alt="Burger Desktop"
      />
    </div>
  )
}

export default HomeImage
