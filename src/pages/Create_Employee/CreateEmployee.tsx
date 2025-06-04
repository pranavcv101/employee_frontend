import './CreateEmployee.css'
import { Layout } from '../../components/Layout/Layout'
import Input from '../../components/Input/input'
import { Select } from '../../components/Select/Select'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { EMPLOYEE_ACTION_TYPES } from '../../store/employee/employee.types'
// import { useAppDispatch } from '../../store/store'
import { store, useAppDispatch } from '../../store/store'
import { addEmployee } from '../../store/employee/employeeReducer'
import { useCreateEmployeeMutation } from '../../api-services/employees/employees.api'
import { useGetDepartmentListQuery } from '../../api-services/department/department.api'



export const CreateEmployee = () => {
    const {data : departmentList} = useGetDepartmentListQuery({})
    const [create] = useCreateEmployeeMutation()
    const navigate = useNavigate()
    // const  dispatch = useDispatch()
    // const dispatch = useAppDispatch()
    const [address,setAddress] = useState({
        houseNo:"",
        line1:"",
        line2:"",
        pincode:""  
    })

    const [employee,setEmployee] = useState({
            employeeId: "",
            email:"",
            name:"",
            age:0,
            password: "",
            role:"",
            dateOfJoining:new Date(),
            experience:0,
            status:"",
            departmentId:0,
            address:address
        })
    const handleSubmit = () => {
        // store.dispatch({type:EMPLOYEE_ACTION_TYPES.ADD,payload:employee})  // type is checked when we refer to store also
        // dispatch({type:EMPLOYEE_ACTION_TYPES.ADD,payload:employee})
        // const action = addEmployee(employee)
        // dispatch(action)\
        create(employee)
        navigate("/employees/employeelist")
    }
    useEffect(() => {
        setEmployee(prev => ({ ...prev, address:address }));
    }, [address]);

    const onChange = (field: string,value :string | number ) => {
        setEmployee({
           ...employee,
           [field]: value
    })
    }

    const onAddressChange= (field:string , value : string , ) => {
        setAddress({
            ...address,
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
                    <Input label='Joining Date' type='date' id='Joining Date' placeholder='Joining Date' onChange={(e)=>onChange("dateOfJoining",e.target.value)}/>
                    <Input label='Experience' type='text' id='Experience' placeholder='Experience' onChange={(e)=>onChange("experience",Number(e.target.value))}/>
                    <Input label='Age' type='Number' id='Age' placeholder='Age' onChange ={(e) => onChange("age",Number(e.target.value))}/>

                    <Select label='Department' id='department' options={departmentList?.map((dep : any)=>{
                        return (
                            {
                                value:dep.id,
                                label:dep.name                            }
                        )
                    })} onChange={(e)=>onChange("departmentId",Number(e.target.value))}/>
                    <Select label='Role' id='role' options={[{ value: 'HR', label: 'HR' },{ value: 'DEVELOPER', label: 'DEVELOPER' }, { value: "UX", label: "UX" }, { value: "UI", label: "UI" }]}  onChange={(e)=>onChange("role",e.target.value)}/>
                    <Select label='Status' id='status' options={[{ value: 'PROBATION', label: 'PROBATION' }, { value: 'INACTIVE', label: 'INACTIVE' },{ value: "ACTIVE", label: "Active" }]} onChange={(e)=>onChange("status",e.target.value)}/>
                    <Input label='Employee Id' type='text' id='Employeeid' placeholder='Employee ID' onChange ={(e) => onChange("employeeId",e.target.value)}/>
                    <Input label='Password' type='password' id='Password' placeholder='Password' onChange ={(e) => onChange("password",e.target.value)}/>
                </div>
                 <div className='AddressContainer'>
                        <Input label='Address' type='text' id='Address1' placeholder='Flat No./House No' onChange={(e)=>onAddressChange("houseNo",e.target.value)}/>
                        <Input type='text' id='Address2' placeholder='Address Line 1' onChange={(e)=>onAddressChange("line1",e.target.value)}/>
                        <Input type='text' id='Address3' placeholder='Address Line 2' onChange={(e)=>onAddressChange("line2",e.target.value)}/>
                        <Input type='text' id='Pincode' placeholder='Pincode'  onChange={(e)=>onAddressChange("pincode",e.target.value)}/>
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