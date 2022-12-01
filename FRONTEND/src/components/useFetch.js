


import { useEffect } from "react";
import { useState } from "react";
//import {useParams} from "react-router-dom"
  const useFetch= (url,m)=> {
    const [data,setdata] = useState("");
    const [loading,setloading] = useState(true);
    const [error,seterror] = useState("")


    fetch(url,{method:m})
    .then(res =>
    res.json())
    .then((data)=>{setdata(data);
        setloading(false);
        })
    .catch( (err) => {console.log(err.message);
                        seterror(err.message);}
    );
    return {data,loading,error}
}
export default useFetch



    