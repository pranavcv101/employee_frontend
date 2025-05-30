// import { useParams } from "react-router-dom"
import "./EmployeeList.css"
import BigButton from "../../components/BigButton/BigButton";
import icon from "../../assets/+.svg"
import pencil from '../../assets/pencil.svg';
import bin from '../../assets/bin.svg'
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PopUp from "../../components/Popup/PopUp";
import { Select } from "../../components/Select/Select";
// const navigate  = useNavigate();
import { useSelector } from "react-redux";
import type { EmployeeState } from "../../store/employee/employee.types";

export const EmployeeList = () => {

    const [searchParams,setSearchParams] = useSearchParams()

    const handleChange = (event:any) => {
        setSearchParams({status:event?.target.value})
    }


    const navigate = useNavigate()
    // const {val}= useParams();
    const [showDel,setDel]= useState(false)
    const handleDelete = (event:any) => {
        event.stopPropagation()
        setDel(true)
    }

    const handleCancel = () => {
        setDel(false)
    }

    const handleClick = () => {
        navigate("/employees/create")
    }
    // const unfilteredEmplooyees = [{
    //     id: 1,
    //     name: "Employee1",
    //     experience: 5,
    //     role: "Designer",
    //     joining: "26-09-2006",
    //     status: "Probation",
    //     address: "adresss",

    // },
    // {
    //     id: 2,
    //     name: "Employee2",
    //     experience: 5,
    //     role: "Designer",
    //     joining: "26-09-2006",
    //     status: "Probation",
    //     address: "adresss",

    // },
    // {
    //     id: 3,
    //     name: "Employee1",
    //     experience: 5,
    //     role: "Designer",
    //     joining: "26-09-2006",
    //     status: "Probation",
    //     address: "adresss",

    // },
    // {
    //     id: 4,
    //     name: "Employee1",
    //     experience: 5,
    //     role: "Designer",
    //     joining: "26-09-2006",
    //     status: "Probation",
    //     address: "adresss",

    // },
    // {
    //     id: 5,
    //     name: "Employee1",
    //     experience: 5,
    //     role: "Designer",
    //     joining: "26-09-2006",
    //     status: "Active",
    //     address: "adresss",

    // },
    // {
    //     id:6,
    //     name: "Employee1",
    //     experience: 5,
    //     role: "Designer",
    //     joining: "26-09-2006",
    //     status: "Inactive",
    //     address: "adresss",

    // }
    // ]
    
    const unfilteredEmplooyees = useSelector((state:EmployeeState)=>state.employees)
    
    // const [emplooyees,setFilteredEmployees] = useState(unfilteredEmplooyees)
    
    // useEffect(()=>{
    //     const filtervalue = searchParams.get("status")
    //     if(filtervalue == "All"){
    //         setFilteredEmployees(unfilteredEmplooyees)
    //     }
    //     else {
    //         setFilteredEmployees(unfilteredEmplooyees.filter((emp)=>(emp.status==filtervalue)))
    //     }
    // },[searchParams])

    const filtervalue = searchParams.get("status") || "All"
    const emplooyees = unfilteredEmplooyees.filter((emp)=>(emp.status==filtervalue || 'All' == filtervalue))

    return (
        <>
        <div className='formhead'>
            Employee List
            <div className="header-right-section">
            Filter By
            <div className="filterby">
                 <select id='status' className="filterselect" onChange={handleChange}>
                    <option value='All' selected>All</option>
                    <option value='Probation'>Probation</option>
                    <option value= 'Inactive'>Inactive</option>
                    <option value= "Active">Active</option>
                </select>
            </div>
            <BigButton text = "Create employee" icon={icon} variant="icon-button" onClick={handleClick}/>
            </div>
        </div>
        <div className="table1">
            <div className="row rowhead">
                  <div className="columnhead">Name</div>
                  <div className="columnhead">ID</div>
                  <div className="columnhead">Joining date</div>
                  <div className="columnhead">Role</div>
                  <div className="columnhead">Status</div>
                  <div className="columnhead">Experience</div>
                  <div className="columnhead">Action</div>
            </div>
            {
                emplooyees.map((emp)=>{
                    return(
                        <div className="row" onClick={()=>navigate(`/employees/${emp.employeeId}`)}>
                            <div className="data">{emp.name}</div>
                            <div className="data">{emp.employeeId}</div>
                            {/* <div className="data">{emp.joining}</div> */}
                            <div className="data">{emp.role}</div>
                            <div className={`data status ${emp.status}`}>{emp.status}</div>
                            <div className="data">{emp.experience} Years</div>
                            <div className="data">
                                <button className="icon-only" onClick={handleDelete}><img src={bin}/></button>
                                <button className="icon-only" onClick={()=>{navigate(`/employees/edit/${emp.employeeId}`)}}><img src={pencil}/></button>
                            </div>
                        </div>
                    ) 
                })
            }
            {
                showDel &&  <PopUp onCancel={handleCancel}/>
            }

        </div>
        </>
    )
}