import './PopUp.css'

const PopUp=({onCancel,onSubmit}:{onCancel:(event:any)=>void , onSubmit:(event:any)=>void})=> {
    return (
        <div className='fullscreen'>
            <div className='box'>
                   <h2>Are you sure?</h2>
                   <p>Do you really want to delete the employee?</p>
                   <div className='popup-buttons'>
                    <button className='confirmbutton' onClick={onSubmit}>Confirm</button>
                    <button className='cancelbutton' onClick={onCancel}>Cancel</button>
                   </div>
            </div>
        </div>
    )
}

export default PopUp;