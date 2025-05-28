import type { ReactNode } from 'react'
import './Input.css'

const Input = ({label="",type,id,placeholder,onChange,value,inputref , endAdornment = null}:
    {label?:string,type?:string,id?:string,placeholder?:string , inputref?:any ,onChange?:(event:any) => void, value?:string , endAdornment?:ReactNode})=>{
    return (
            <div>{label}
        <div className='WrapperContainer'>
        <input type={type} id={id} name={label} required  className="inputWrapper" placeholder={placeholder} value = {value} onChange={onChange} ref={inputref}/>
        {endAdornment}
        </div>
        </div>
    )
  
}
export default Input;