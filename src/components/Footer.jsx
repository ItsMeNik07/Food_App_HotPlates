import FooterComponent from "./FooterComponent";
import footerContact from "./footerContact";
import footerData from "./footerdata";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <footer>
        <div className="max-w-3xl mx-auto w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            {/* App */}
            <div className="hidden md:block ">
               <Link to="/">
               <div className="group inline"><h2 className="font-bold text-xl hover:underline group-hover:text-red-600 transition-all duration-300 ease-in-out">Hot<span className="text-red-600 group-hover:text-black transition-all duration-300 ease-in-out">Plates</span></h2></div></Link> 
                <p>Serving joy on every plate. Delicious meals, unforgettable experiences..</p>
            </div>
            {/* Brands */}
            <div className="space-y-2">
                <p className="font-semibold pl-5 text-md">Follow Us</p>
                 {footerData.map((item,index)=>(
                    <FooterComponent icon = {item.icon}
                     title = {item.title} 
                     key = {index}/>
                ))}
            </div>
            {/* Contact details */}
            <div className="space-y-2">
                <p className="font-semibold pl-5">Contact</p>
                {footerContact.map((item,index)=>(
                    <FooterComponent icon = {item.icon}
                     key = {index}
                     title = {item.title}
                     reactIcon = {item.reactIcon} />
                ))}
            </div>
        </div>
          <div className="mt-6 text-center text-xs text-gray-300 border-t-[0.3px] border-gray-300 pt-2">
    &copy; {new Date().getFullYear()} HotPlates. All rights reserved.
  </div>
        </footer>
    )
}

export default Footer;