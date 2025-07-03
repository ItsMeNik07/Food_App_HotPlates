import Container from "./Container";
import { useState } from "react";
import useFetch from "./useFetch";
import Loader from "../Loader/Loader";
import '../Loader/loader.css'
function Card(){
    const data = useFetch();
    if(!data) return <div className="h-[100vh] flex justify-center items-center"><Loader /></div>;
    const cardComponents = data.map((data)=>(
        <Container image = {data.strCategoryThumb}
        title = {data.strCategory}
        description = {data.strCategoryDescription}
        key = {data.idCategory} /> 
    ))
    
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 justify-items-center ">
        {cardComponents}
        </div>
    )
}

export default Card;