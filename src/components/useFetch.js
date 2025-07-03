import { useState, useEffect } from "react";
import axios from "axios";

function useFetch() {
  const [data, setData] = useState();
    useEffect(()=>{
    async function getData() {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
        console.log("getting called");
        setData(response.data.categories);
    }
    getData();
},[])
    return data;
}

export default useFetch;
