import './Aside.css'
import icon from '../../assets/icon.svg'
import kvlogo from '../../assets/kv-logo.png'
export const Aside = ({sidebar}:{sidebar:string}) => {
    return <aside>
                        <img src={kvlogo} className='logo'/>
                        <div className ="iconbox">
                            <div className = "iconsubbox" > 
                                <img src= {icon} className='icon'/>
                            </div>
                            <p >
                            {sidebar}
                            </p >
                        </div>
            </aside>

}