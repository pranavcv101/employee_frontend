import './UncontrolledLogin.css'
import LoginInput from "../../components/Input/LoginInput";
import { useRef, useEffect } from "react";
import kvLogo from "../../assets/kv-logo.png";
import kvLoginImg from "../../assets/kv-login.jpeg";
import Button from "../../components/Button/Button";



const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);

  const clearButtonRef = useRef<HTMLButtonElement | null>(null)

  const clearButtonDisable = () => {
    if(!clearButtonRef.current) return;
    if(!usernameRef.current) return;
    if(usernameRef.current.value.length > 0)
    {
        clearButtonRef.current.disabled = false;
        clearButtonRef.current.onclick = clearUser;
        // the above line is given otherise it cause problems since we seetg defaul as true
    }
    else{
         clearButtonRef.current.disabled = true;
    }
   
  }

//   useEffect(()=> {
//     clearButtonDisable()
//   },[])

  

const clearUser = () => {
    if(!usernameRef.current)
        return;
    usernameRef.current.value = ''
    if(!clearButtonRef.current)
        return;
    clearButtonRef.current.disabled = true;
    }
  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);

  return (
    <div className="content" >
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src={kvLoginImg} alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src={kvLogo} alt="KV Logo" />
          <form>
            <LoginInput
              id="login-username-input"
              label="Username"
              ref = {usernameRef}
              onChange={clearButtonDisable}
              endAdornment = {
                <button disabled = {true} type = "button" ref={clearButtonRef} onClick={()=>clearUser()}>Clear</button>
              }
            />
            <LoginInput id="login-password-input" label="Password" />

            <Button text='Log in' type="submit" className="login-button">
              
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;