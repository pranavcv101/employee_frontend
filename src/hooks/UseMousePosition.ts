import { useEffect, useState } from "react";

function useMousePosition(){
    const [mousePositon , setMousePositon] = useState({
        x:0,
        y:0
    })
    
    let setMouseValue = (event:any) => {
        setMousePositon({
            x:event.x,
            y:event.y
        })
    }

    useEffect(()=> {
        window.addEventListener('mousemove',setMouseValue)
        return ()=> {
            window.removeEventListener('mousemove',setMouseValue)
        }
    }, [])

    return mousePositon;
}

export default useMousePosition;