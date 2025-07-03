import FooterPage from "../Pages/FooterPage";
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import { useRef } from "react";


function Layout(){
    const location = useLocation();
     const footerRef = useRef();

     const scrollToFooter = () => {
        console.log("Scroll down");
        footerRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return(
    <div>
   {location.pathname != "/" && <NavBar scrollToFooter={scrollToFooter} />} 
    <Outlet context={{ scrollToFooter }}/>
   <FooterPage footerRef = {footerRef}/>
    </div>
    )
}

export default Layout;