import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import "./GetEmployeeById.css"
import BigButton from "../../components/BigButton/BigButton"
import icon from '../../assets/whitepencil.svg'
import { useGetEmployeeByIdQuery } from "../../api-services/employees/employees.api"
export const GetEmployeeById = () => {
    const navigate = useNavigate();
    // const handleClick = ({emp}:{emp:number}) => {
    //     navigate("edit"+{emp})
    // }
    // const [searchparams, setSearchParams] = useSearchParams();
    const { id } = useParams()
    const { data : emplooyee } = useGetEmployeeByIdQuery({id:Number(id)})

    // const emplooyee = emplooyees.find((emp) => (emp.id == Number(id)));

    if (!emplooyee) {
        return <p>not found</p>
    }
    return (
        <>
        <div className='formhead'>
            Employee Details
            <BigButton text = "Edit" icon={icon} variant="icon-button" onClick={()=>{navigate(`/employees/edit/${id}`)}}/>
        </div>
        <div className="details">
            <div className="component">
                <div className="details-head">Name</div>
                <div >{emplooyee.name}</div>
            </div>
            <div className="component">
                <div className="details-head">Joining</div>
                <div>{emplooyee.dateOfJoining}</div>
            </div>
            <div className="component">
                <div className="details-head">Role</div>
                <div>{emplooyee.role}</div>
            </div>
            <div className="component ">
                <div className="details-head">Status</div>
                <div className={`bk ${emplooyee.status}`}>{emplooyee.status}</div>
            </div>
            <div className="component">
                <div className="details-head">Experience</div>
                <div>{emplooyee.experience}</div>
            </div>
            {/* <div className="component">
                <div className="details-head">Address</div>
                <div>{emplooyee.address}</div>
            </div> */}
            <div className="component ">
                <div className="details-head">Id</div>
                <div>{emplooyee.employeeId}</div>
            </div>

            {/* <div>
                <button type="button" onClick={() => { console.log('hello', searchparams.get('hello')) }}>get</button>
                <button onClick={()=>{
                    searchparams.set("hello","hoiwruuu")
                    setSearchParams(searchparams)}}>set</button>
            </div> */}
        </div>
    </>
    )
}