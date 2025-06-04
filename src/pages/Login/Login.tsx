
import './Login.css'
import kvlogin from '../../assets/kv-login.jpeg'
import kvlogo from '../../assets/kv-logo.png'
import Input from '../../components/Input/input'
import Button from '../../components/Button/Button'
import { useEffect, useRef, useState } from 'react'
import useMousePosition from '../../hooks/UseMousePosition'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../api-services/auth/login.api'


export const Login = () => {
    const [error,setError] =   useState("")
    const [login,{isLoading}] = useLoginMutation();
    // const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [userName,setValue] = useState('')


    const onLogin = async() => {
        // const response = await login({email:userName , password:password});
        // if(response?.data?.accessToken){
        //     localStorage.setItem("token",response.data.accessToken);
        //     navigate("/employees");
        // }


        login({email:userName,password:password}).unwrap()
        .then((response) => {
            localStorage.setItem("token",response.accessToken);
            navigate("/employees");
        })
        .catch((error)=>{
            setError(error.data.message)
        });
    };


    
    const navigate = useNavigate();
    // const handleLogin = () => {
    //     localStorage.setItem("isLoggedIn","true")
    //     navigate("/employees")
        
    // }


    // let [count,setCounter] = useState(0)

    // const increaseCounter = () => {
    //     setCounter(count + 1)
    // }

    const changeUserName  = (event:any) => {
        setValue(event.target.value)
    }
    let [message , setMessage] = useState('')

    // let [showpass,setShowPass] = useState(true)
    let [showpass ,setShowPass] = useLocalStorage("showpass","false")
    const usernameRef = useRef<HTMLInputElement>(null)
    useEffect(()=> {
       const x =userName.length;
       if(x>15)(
        setMessage("username exceedeed")
       )
       else
        setMessage('')
    },[userName])
    
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
                    <img src={kvlogo} className="logo"/>
                    <Input label='Username' type='text' id='username' placeholder='Username' onChange={changeUserName} value={userName} inputref = {usernameRef} 
                    endAdornment = {<button type="button"  disabled = {userName.length === 0} onClick={()=>setValue('')}>Clear</button>}/>
                    <p>{message}</p>
                    <p>{error}</p>
                    <Input label='Password' type={JSON.parse(showpass)?'password':'text'} id='password' placeholder='Password' onChange = {(event:any) => {setPassword(event.target.value)} } value ={password}/>
                    <div>
                    <input  type='checkbox' onChange={()=>{}} id='showpass' checked = {JSON.parse(showpass)} onClick={()=>setShowPass((!JSON.parse(showpass)).toString())}/>
                       Show password
                    </div>
                    
                    <Button  text="Login" variant='primary' onClick={onLogin} disabled = {isLoading} className='loginbutton'></Button>
            </form>
            </div>
        </div>
    )
}
