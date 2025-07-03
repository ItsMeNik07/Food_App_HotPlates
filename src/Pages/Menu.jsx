import Dropdown from "../components/Dropdown";
import { useEffect, useState } from "react";
import axios from 'axios';
import Container from "../components/Container";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

function Menu(){
    const [value,setValue] = useState("Indian");
    const navigate = useNavigate()
    const [id,setId] = useState(null);
    const [data,setData] = useState();
    const [initialLoading, setInitialLoading] = useState(true);
    const [contentLoading, setContentLoading] = useState(false);
    const options = [
  "American",
  "British",
  "Canadian",
  "Chinese",
  "Dutch",
  "Egyptian",
  "French",
  "Greek",
  "Indian",
  "Italian"
];
    useEffect(()=>{
        const cuisine = value;
        if(initialLoading){
            setInitialLoading(true);
        }else{
            setContentLoading(true);
        }
        async function getData(cuisine){
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`)
            console.log(response.data.meals)
            setData(response.data.meals);
            if(initialLoading){
                setInitialLoading(false);
            }else{
                setContentLoading(false);
            }
        }
        getData(cuisine);


        return function(){
            console.log("cleaning");
            setData(null);
        }
    },[value])
    
    useEffect(()=>{
        async function getMealData() {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            console.log(res.data.meals);
            navigate('/item-description', { state: { mealData: res.data.meals } });
        }
        if(id){
        getMealData();
        }
    },[id,navigate,data])

    if(initialLoading) return(
        <div className="bg-[#fff5cf] h-[100vh] flex items-center justify-center">
        <Loader />
        </div>
    )
    return(
        <div className="bg-[#fff5cf]">
        <div className="pt-8 px-10">
            <Dropdown title="Cuisine"
             option={options}
             selected = {value}
             setValue = {setValue}
             />
            </div>

            {contentLoading?( <div className="flex justify-center items-center py-10 h-[100vh]">
                    <Loader />
                </div>) : (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 justify-items-center">
                {data.map((item)=>(
                    <Container image = {item.strMealThumb}
                    title = {item.strMeal}
                    key = {item.idMeal}
                    id = {item.idMeal}
                    setID = {setId}
                     />

                ))}
             </div>) } 
        </div>
    )
}

export default Menu;