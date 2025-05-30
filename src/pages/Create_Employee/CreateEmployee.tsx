import './CreateEmployee.css'
import { Layout } from '../../components/Layout/Layout'
import Input from '../../components/Input/input'
import { Select } from '../../components/Select/Select'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { EMPLOYEE_ACTION_TYPES } from '../../store/employee/employee.types'
// import { useAppDispatch } from '../../store/store'
import { store } from '../../store/store'


export const CreateEmployee = () => {
    const navigate = useNavigate()
    const  dispatch = useDispatch()
    // const dispatch = useAppDispatch()

    const handleSubmit = () => {
        // store.dispatch({type:EMPLOYEE_ACTION_TYPES.ADD,payload:employee})  // type is checked when we refer to store also
        dispatch({type:EMPLOYEE_ACTION_TYPES.ADD,payload:employee})
        navigate("/employees/employeelist")
    }
    const [employee,setEmployee] = useState({
            employeeid: "",
            email:"",
            name:"",
            age:"",
            address:"",
            experience:"",
            role:"",
            joining:"",
            status:"",
        })

    const onChange = (field: string,value :string) => {
        console.log(field, value);
        setEmployee({
           ...employee,
           [field]: value
    })
}
    
    return (
        // <Layout 
        //  sidebar='Employee List' header='Create Employees'
        //    >
        <>
        <div className='formhead'>
            Create Employee
        </div>
        <form>
            <div className='formgroup'>
                <div className='parentclass'>
                    <Input label='Employee Name' type='text' id='Employee Name' placeholder='Employee Name' onChange={(e)=>onChange("name",e.target.value)}/>
                    <Input label='Email' type='text' id='Email' placeholder='Email' onChange ={(e) => onChange("email",e.target.value)}/>
                    <Input label='Joining Date' type='text' id='Joining Date' placeholder='Joining Date' onChange={(e)=>onChange("joining",e.target.value)}/>
                    <Input label='Experience' type='text' id='Experience' placeholder='Experience' onChange={(e)=>onChange("experience",e.target.value)}/>
                    <Input label='Age' type='Number' id='Age' placeholder='Age' onChange ={(e) => onChange("age",e.target.value)}/>
                    
                    <Select label='Department' id='department' options={[{ value: 'DESIGN', label: 'DESIGN' }, { value: "PRODUCT", label: "PRODUCT" }]} onChange={(e)=>onChange("department",e.target.value)}/>
                    <Select label='Role' id='role' options={[{ value: 'HR', label: 'HR' },{ value: 'DEVELOPER', label: 'DEVELOPER' }, { value: "UX", label: "UX" }, { value: "UI", label: "UI" }]}  onChange={(e)=>onChange("role",e.target.value)}/>
                    <Select label='Status' id='status' options={[{ value: 'Probation', label: 'Probation' }, { value: 'Inactive', label: 'Inactive' },{ value: "Active", label: "Active" }]} onChange={(e)=>onChange("status",e.target.value)}/>
                    <Input label='Employee Id' type='text' id='Employeeid' placeholder='Employee ID' />

                    <div className='AddressContainer'>
                        <Input label='Address' type='text' id='Address1' placeholder='Flat No./House No' onChange={(e)=>onChange("address",e.target.value)}/>
                        <Input type='text' id='Address2' placeholder='Address Line 1' onChange={(e)=>onChange("address",e.target.value)}/>
                        <Input type='text' id='Address3' placeholder='Address Line 2' onChange={(e)=>onChange("address",e.target.value)}/>
                        <Input type='text' id='Pincode' placeholder='Pincode'  onChange={(e)=>onChange("address",e.target.value)}/>
                    </div>
                </div>
                <div className='twobuttonform'>
                    <Button text="Create" variant='primary' onClick={handleSubmit}/>
                    <Button text='Cancel' variant='secondary' type="reset" onClick={()=>{navigate('/employees/employeelist')}} />
                </div>
            </div>
        </form>
        </>
        // </Layout>
    )
}