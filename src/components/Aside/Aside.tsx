import './Aside.css'
import icon from '../../assets/icon.svg'
import kvlogo from '../../assets/kv-logo.png'
import { useNavigate } from 'react-router-dom'
export const Aside = ({ sidebar }: { sidebar: string }) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', 'false')
        navigate('/login')
    }
    const goToProfile  = () => {
        navigate('/profile')
    }

    return <aside>

        <img src={kvlogo} className='aside-logo' />
         <div className="profilebox" onClick={goToProfile}>
            <div className="iconsubbox" >
                <img src={icon} className='icon' />
            </div>
            <p >
                Profile
            </p >
        </div>
        <div className="iconbox" onClick={() => navigate('/employees/employeelist')}>
            <div className="iconsubbox" >
                <img src={icon} className='icon' />
            </div>
            <p >
                {sidebar}
            </p >
        </div>

        <div className="logoutbox" onClick={handleLogout}>
            <div className="iconsubbox" >
                <img src={icon} className='icon' />
            </div>
            <p >
                Logout
            </p >
        </div>
    </aside>
}