import { useState } from "react";
import { UseCounterProps } from "./useCounter.types";
export const useCounter=({initialCount=0}:UseCounterProps={})=>{
    const [count,setCount]=useState(initialCount);
    const increament=()=>setCount(count+1);
    const decreament=()=>setCount(count-1);
    return {count,increament,decreament}
}