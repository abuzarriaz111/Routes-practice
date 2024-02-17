
import React,{useEffect, useState} from "react";
const Loading = () => {
    const[loading,setLoading]=useState(true)
     
useEffect(()=>{
   setTimeout(()=>setLoading(false),3000);
},[])
if (loading) {
    return <h2>loading...</h2>
    
}
    return (  
        <>
        <h2>data</h2>
        </>
    );
}
 
export default Loading;