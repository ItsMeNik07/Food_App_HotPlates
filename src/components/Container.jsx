import { useEffect, useRef, useState } from "react";
import '../Scroller/scroller.css'
import useFetch from "./useFetch";

function Container(props){
    const itemRef = useRef(null);
    const [expanded,setExpanded] = useState(false)
    console.log("Container called")
    let shortDescription = "";
    if(props.description){
    shortDescription = props.description.slice(0,100) + "..."
    }

    function handleClick(){
      if(props.setID){
        props.setID(props.id);
      }
    }
    return(
    <div ref={itemRef} className="group relative w-64 shadow-md cursor-pointer bg-[#f8c146] hover:shadow-slate-300 m-4 border-2 border-transparent hover:scale-105 hover:border-yellow-600 p-4 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out items-center hover:shadow-lg" onClick={handleClick}>
    <img src={props.image} alt={props.title} className="h-40 w-52 pl-2 rounded-full shadow-sm mb-4" />
    <p className="text-black text-center font-semibold my-2 group-hover:text-red-600">{props.title}</p>

      {props.description ? (expanded ? (
    <div className="absolute top-0 left-0 w-full h-full bg-yellow-600 z-10 p-4 overflow-y-auto your-scroll-container">
      <p className="text-sm text-white font-light">
        {props.description}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(false);
          }}
          className="text-black ml-1 hover:underline font-normal"
        >
          Read Less
        </button>
      </p>
    </div>
  ) : (
    <p className="text-sm text-gray-700 font-light group-hover:text-black">
      {shortDescription}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setExpanded(true);
        }}
        className="text-black ml-1 group-hover:text-red-600 group-hover:font-medium hover:underline"
      >
        Read More
      </button>
    </p>
  )): null}
  
</div>
    )
}

export default Container;