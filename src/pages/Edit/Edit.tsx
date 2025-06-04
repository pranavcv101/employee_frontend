import './Edit.css'
import { Layout } from '../../components/Layout/Layout'
import Input from '../../components/Input/input'
import { Select } from '../../components/Select/Select'
import Button from '../../components/Button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useGetEmployeeByIdQuery, useUpdateEmployeeMutation } from '../../api-services/employees/employees.api'
import { useGetDepartmentListQuery } from '../../api-services/department/department.api'

export const EditEmployee = () => {
  const {data : departmentList} = useGetDepartmentListQuery({})
  const { id } = useParams();

  // const emp = employees.find((emp) =>(emp.id == Number(id)))
  // if(!emp)
  //     return <p>Not found</p>
  const { data: employee } = useGetEmployeeByIdQuery({ id: Number(id) })
  const [edit] = useUpdateEmployeeMutation()
  const navigate = useNavigate()



  const [editemployee, setEditEmployee] = useState({
    id: 0,
    employeeId: "",
    email: "",
    name: "",
    age: 0,
    password: "",
    role: "",
    dateOfJoining: new Date(),
    experience: 0,
    status: "",
    departmentId: 0,
    address:{
      
houseNo:'',
          line1:'',
          line2:'',
          pincode:''
    }
  })

    

  useEffect(() => {
    if (employee) {
      setEditEmployee({
        id: Number(id),
        employeeId: employee.employeeId,
        name: employee.name,
        password: employee.password,
        email: employee.email,
        age: employee.age,
        experience: Number(employee.experience),
        role: employee.role,
        dateOfJoining: employee.dateOfJoining,
        status: employee.status,
        departmentId:Number(employee?.department?.id),
        address: {
          houseNo:employee.address.houseNo,
          line1:employee.address.line1,
          line2:employee.address.line2,
          pincode:employee.address.pincode
        }
      })
    }
  }, [employee])

  const handleUpdate = async () => {
    // await edit(editemployee)
    // navigate("/employees/employeelist")
    // console.log(`depp -- ${employee?.department?.id}`)
    edit(editemployee).unwrap()
      .then((response) => {
        navigate("/employees/employeelist")
      })
      .catch((error) => {
        console.log(error)
      })
  }


    const onAddressChange= (field:string , value : string , ) => {
        setEditEmployee((prev) => {
          return ({
            ...prev,
            address: {
              ...prev.address,
              [field]: value
            }
          });
        });
    }

  const onChange = (field: string, value: string | number) => {

    setEditEmployee((prev) => ({
      ...prev,
      [field]: value
    })
    )
  }
  return (
    // <Layout 
    //  sidebar='Employee List' header='Create Employees'
    //    >
    <>
      <div className='formhead'>
        Edit Employee
      </div>
      <form>
        <div className='formgroup'>
          <div className='editparentclass'>
            <Input label='Employee Name' type='text' id='name' placeholder='Employee Name' value={editemployee.name} onChange={(e) => onChange("name", e.target.value)} />
            <Input label='Email' type='text' id='Email' placeholder='Email' value={editemployee.email} onChange={(e) => onChange("email", e.target.value)} />

            <Input label='Joining Date' type='date' id='Joining Date' placeholder='Joining Date' value={editemployee.dateOfJoining.toString().substring(0, 10)} onChange={(e) => onChange("dateOfJoining", e.target.value)} />
            <Input label='Experience' type='number' id='Experience' placeholder='Experience' value={editemployee.experience} onChange={(e) => onChange("experience", Number(e.target.value))} />
            <Input label='Age' type='Number' id='Age' placeholder='Age' value={editemployee.age} onChange={(e) => onChange("age", Number(e.target.value))} />

            <Select label='Department' id='department' value={editemployee.departmentId} options={departmentList?.map((dep : any)=>{
                        return (
                            {
                                value:dep.id,
                                label:dep.name                            }
                        )
                    })

            } onChange={(e) => onChange("departmentId", Number(e.target.value))} />
            <Select label='Role' id='role'value={editemployee.role} options={[{ value: 'HR', label: 'HR' }, { value: 'DEVELOPER', label: 'DEVELOPER' }, { value: "UX", label: "UX" }, { value: "UI", label: "UI" }]} onChange={(e) => onChange("role", e.target.value)} />
            <Select label='Status' id='status' value={editemployee.status} options={[{ value: 'PROBATION', label: 'PROBATION' }, { value: 'INACTIVE', label: 'INACTIVE' }, { value: "ACTIVE", label: "ACTIVE" }]} onChange={(e) => onChange("status", e.target.value)} />
            <Input label='EmpoloyeeId' type='text' id='EmployeeId' value={editemployee.employeeId} />

            <div className='AddressContainer'>
              <Input label='Address' type='text' id='Address1' placeholder='Flat No./House No' value={editemployee.address.houseNo} onChange={(e) => onAddressChange("houseNo", e.target.value)} />
              <Input type='text' id='Address2' placeholder='Address Line 1' value={editemployee.address.line1} onChange={(e) => onAddressChange("line1", e.target.value)} />
              <Input type='text' id='Address3' placeholder='Address Line 2' value={editemployee.address.line2} onChange={(e) => onAddressChange("line2", e.target.value)} />
              <Input type='text' id='Pincode' placeholder='Pincode' value={editemployee.address.pincode} onChange={(e) => onAddressChange("pincode", e.target.value)} />
            </div>

          </div>
          <div className='twobuttonform'>
            <Button text="Create" variant='primary' onClick={handleUpdate} />
            <Button text='Cancel' variant='secondary' type="reset" />
          </div>
        </div>
      </form>
    </>
    // </Layout>
  )
}