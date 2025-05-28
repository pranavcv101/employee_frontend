import { use, useEffect, useState } from "react";

function useLocalStorage (key:string, initial:string): [string , (value:string)=>void]{

    let [data, setData] = useState(initial)

    useEffect(()=>{
        let value = window.localStorage.getItem(key)
        if(value)
            setData(value)
    },[])

    function setValue(value:string){
        setData(value);
        window.localStorage.setItem(key,value);
    }

    return [data,setValue];
}

export default useLocalStorage;