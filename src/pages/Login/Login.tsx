
import './Login.css'
import kvlogin from '../../assets/kv-login.jpeg'
import kvlogo from '../../assets/kv-logo.png'
import Input from '../../components/Input/input'
import Button from '../../components/Button/Button'
import { useEffect, useRef, useState } from 'react'
import useMousePosition from '../../hooks/UseMousePosition'
import useLocalStorage from '../../hooks/useLocalStorage'

export const Login = () => {
    // let [count,setCounter] = useState(0)

    // const increaseCounter = () => {
    //     setCounter(count + 1)
    // }
    let mousepos = useMousePosition();

    let [username,setValue] = useState('')
    const changusername  = (event:any) => {
        setValue(event.target.value)
        console.log(event)
    }
    let [password,setPassword] = useState('')
    let [message , setMessage] = useState('')

    // let [showpass,setShowPass] = useState(true)
    let [showpass ,setShowPass] = useLocalStorage("showpass","false")
    const usernameRef = useRef<HTMLInputElement>(null)
    useEffect(()=> {
       const x =username.length;
       if(x>5)(
        setMessage("username exceedeed")
       )
       else
        setMessage('')
    },[username])
    
    useEffect(()=> {
        if(usernameRef.current){
            usernameRef.current.focus()
        }
    },[])
    return (

        <div className='container'>
            <div className='left-panel'>
                 <img src={kvlogin} className="profile"/>
            </div>
            <div className='right-panel'>
            <form>
                    {/* <div className='counter'>
                        counter value : {count}
                        <Button text="add" onClick={increaseCounter}/>
                        <Button text="substract" onClick={() => setCounter(count - 1)}/>
                    </div> */}
                    <div>
                        {mousepos.x} <br/> {mousepos.y}
                    </div>
                    <img src={kvlogo} className="logo"/>
                    <Input label='Username' type='text' id='username' placeholder='Username' onChange={changusername} value={username} inputref = {usernameRef} 
                    endAdornment = {<button type="button"  disabled = {username.length === 0} onClick={()=>setValue('')}>Clear</button>}/>
                    <p>{message}</p>
                    <Input label='Password' type={JSON.parse(showpass)?'password':'text'} id='password' placeholder='Password' onChange = {(event:any) => {setPassword(event.target.value)} } value ={password}/>
                    <div>
                    <input  type='checkbox' id='showpass' checked  = {JSON.parse(showpass)} onClick={()=>setShowPass((!JSON.parse(showpass)).toString())}/>
                       Show password
                    </div>
                    <Button text="Login" onClick={()=>window.localStorage.setItem("isLoggedIn","true")}></Button>
            </form>
            </div>
        </div>
    )
}
