import { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import '../Scroller/scroller.css'

function ItemDescription(){
    const location = useLocation()
    const [tags,setTags] = useState()
    const mealData = location.state?.mealData[0];
    console.log(location.state?.food);
    console.log(mealData);
       if(!mealData){
        return (
            <div className="bg-[#fff5cf] flex justify-center items-center h-[100vh]">
                <div className="flex gap-4 ">
                <FaSearch className="text-xl text-amber-800 mt-[2px]"/>
                <p className="font-bold text-yellow-600 group">Please Select something from the <Link to="/menu" className="text-blue-400 group-hover:underline">Menu</Link></p>
                </div>
                </div>
        )
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
        if(mealData.strTags){
            setTags(mealData.strTags.split(","));
        }
        return function(){
            setTags(null)
        }
    },[])
 
    return(
        <div className="bg-[#fff5cf] py-8 flex justify-center flex-col items-center p-4 overflow-x-hidden"> 
        <div className="md:grid md:grid-cols-2 p-14 gap-12 max-w-4xl md:bg-yellow-500 md:rounded-l-[1024px] md:rounded-r-full md:hover:shadow-xl md:shadow-yellow-300 transition-all duration-300 ease-in-out group">
            <div className="px-12 bg-yellow-600 rounded-full py-12 flex items-center justify-center md:p-16 md:w-full">
            <img src={mealData.strMealThumb} alt={mealData.strMeal} className="rounded-full  object-cover md:group-hover:scale-110 md:transition-all duration-700 ease-in-out"/>
            </div>
            <div className="pt-12 px-4 md:my-auto md:pr-8">
                <h2 className="font-bold text-2xl">{mealData.strMeal}</h2>
                <p className="font-medium text-lg">{mealData.strArea}</p>
                
                {tags? (<div className="flex gap-3 flex-wrap">
                    {tags.map((tag)=>(
                        <p className="border-2 py-[1px] px-2 rounded-xl text-sm bg-yellow-600 border-yellow-500 font-light md:group-hover:scale-105 md:group-hover:border-yellow-600 transition-all duration-300 ease-in-out">{tag}</p>
                    ))}
                        
                </div>):null}
                <div className="flex gap-2 my-2 cursor-pointer hover:underline">
                <FaYoutube className="mt-1 text-red-600 text-lg md:text-xl"/>
                  <a
                href={mealData.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="font-light"
                    >
    {mealData.strYoutube}
  </a>
                </div>

                <div className="">
                    <h2 className="font-semibold text-lg mb-2">Details</h2>
                    <p className="text-sm overflow-y-auto line-clamp-6 md:h-54 md:line-clamp-4 your-scroll-container">{mealData.strInstructions}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ItemDescription;