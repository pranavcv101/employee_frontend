import './Edit.css'
import { Layout } from '../../components/Layout/Layout'
import Input from '../../components/Input/input'
import { Select } from '../../components/Select/Select'
import Button from '../../components/Button/Button'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export const EditEmployee = () => {
    const {id}= useParams();
    const employees = [
  {
    id: 19,
    createdAt: "2025-05-22T22:28:22.139Z",
    updatedAt: "2025-05-22T22:28:22.139Z",
    deletedAt: null,
    email: "employee1@gmail.com",
    name: "Employee 1",
    age: 22,
    password: "$2b$10$VqyT7v43sWsZA.ApcKkdrOVUWDwuPQNF72T9GzhNyDFtILki6duQm",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 1,
    status: "PROBATION",
    role: "HR",
    address: {
      id: 19,
      createdAt: "2025-05-22T22:28:22.139Z",
      updatedAt: "2025-05-22T22:28:22.139Z",
      deletedAt: null,
      line1: "123 March Street, kochi",
      pincode: "849314",
      line2: "",
      houseNo: "",
    },
    department: null,
  },
  {
    id: 20,
    createdAt: "2025-05-22T22:51:17.419Z",
    updatedAt: "2025-05-22T22:51:17.419Z",
    deletedAt: null,
    email: "employee2@gmail.com",
    name: "Employee 2",
    age: 22,
    password: "$2b$10$.t4bnVPchd2RWmk05ZAsUuRWQ/Fa4DtMy6akY73nBHfHs46ufCyGy",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 1,
    status: "ACTIVE",
    role: "DEVELOPER",
    address: {
      id: 20,
      createdAt: "2025-05-22T22:51:17.419Z",
      updatedAt: "2025-05-22T22:51:17.419Z",
      deletedAt: null,
      line1: "123 March Street, kochi",
      pincode: "849314",
      line2: "",
      houseNo: "120",
    },
    department: null,
  },
  {
    id: 21,
    createdAt: "2025-05-22T22:54:50.961Z",
    updatedAt: "2025-05-22T22:54:50.961Z",
    deletedAt: null,
    email: "employee3@gmail.com",
    name: "Employee 3",
    age: 22,
    password: "$2b$10$7iEtKfd2m/jgTCzNr8o52uveHFqwnZkDOApPTUFMkA.c/UwwhwD6G",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 1,
    status: "ACTIVE",
    role: "DEVELOPER",
    address: {
      id: 21,
      createdAt: "2025-05-22T22:54:50.961Z",
      updatedAt: "2025-05-22T22:54:50.961Z",
      deletedAt: null,
      line1: "123 Mascrch Street, kochi",
      pincode: "849314",
      line2: "",
      houseNo: "",
    },
    department: null,
  },
  {
    id: 22,
    createdAt: "2025-05-23T01:00:41.158Z",
    updatedAt: "2025-05-23T01:00:41.158Z",
    deletedAt: null,
    email: "employee4@gmail.com",
    name: "Employee 4",
    age: 22,
    password: "$2b$10$AGJ5HO0IuAmg5t4pxAKWQu.z2W4K84ktr2/bkyAnHfGVRYcijNB6q",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 1,
    status: "ACTIVE",
    role: "DEVELOPER",
    address: {
      id: 22,
      createdAt: "2025-05-23T01:00:41.158Z",
      updatedAt: "2025-05-23T01:00:41.158Z",
      deletedAt: null,
      line1: "123 Mascrch Street, kochi",
      pincode: "849314",
      line2: "",
      houseNo: "",
    },
    department: null,
  },
  {
    id: 23,
    createdAt: "2025-05-23T01:06:01.563Z",
    updatedAt: "2025-05-23T01:06:01.563Z",
    deletedAt: null,
    email: "employee5@gmail.com",
    name: "Employee 5",
    age: 22,
    password: "$2b$10$R4WUNvLSdg9G92oq/kkBNusoV4SXH4L.CtSmpa4MpwDyLjtYWPR06",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 1,
    status: "ACTIVE",
    role: "DEVELOPER",
    address: {
      id: 23,
      createdAt: "2025-05-23T01:06:01.563Z",
      updatedAt: "2025-05-23T01:06:01.563Z",
      deletedAt: null,
      line1: "123 Mascrch Street, kochi",
      pincode: "849314",
      line2: "",
      houseNo: "",
    },
    department: {
      id: 2,
      createdAt: "2025-05-23T00:54:41.356Z",
      updatedAt: "2025-05-23T03:22:28.469Z",
      deletedAt: null,
      name: "Product",
    },
  },
  {
    id: 25,
    createdAt: "2025-05-23T01:11:10.391Z",
    updatedAt: "2025-05-23T01:11:10.391Z",
    deletedAt: null,
    email: "employee6@gmail.com",
    name: "Employee 6",
    age: 22,
    password: "$2b$10$INY0G5SkUxO0fmI3IUx0luRCCOQcrsWqZTZaCsgW55U/OhBxPXj9S",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 1,
    status: "ACTIVE",
    role: "UX",
    address: {
      id: 24,
      createdAt: "2025-05-23T01:11:10.391Z",
      updatedAt: "2025-05-23T01:11:10.391Z",
      deletedAt: null,
      line1: "123 Mascrch Street, kochi",
      pincode: "849314",
      line2: "",
      houseNo: "",
    },
    department: {
      id: 3,
      createdAt: "2025-05-23T00:54:44.817Z",
      updatedAt: "2025-05-23T00:54:44.817Z",
      deletedAt: null,
      name: "Design",
    },
  },
  {
    id: 26,
    createdAt: "2025-05-23T01:32:52.046Z",
    updatedAt: "2025-05-23T01:32:52.046Z",
    deletedAt: null,
    email: "employee7@gmail.com",
    name: "Employee 7",
    age: 22,
    password: "$2b$10$BhFpa5rNa3WWgprWBqfgkealllrioa17Vmv45DBhuKavEdHzUTW.C",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 2,
    status: "INACTIVE",
    role: "UX",
    address: {
      id: 25,
      createdAt: "2025-05-23T01:32:52.046Z",
      updatedAt: "2025-05-23T01:32:52.046Z",
      deletedAt: null,
      line1: "123 Mascrch Street, kochi",
      pincode: "849314",
      line2: "",
      houseNo: "",
    },
    department: {
      id: 3,
      createdAt: "2025-05-23T00:54:44.817Z",
      updatedAt: "2025-05-23T00:54:44.817Z",
      deletedAt: null,
      name: "Design",
    },
  },
  {
    id: 2,
    createdAt: "2025-05-23T01:39:01.370Z",
    updatedAt: "2025-05-23T01:39:01.370Z",
    deletedAt: null,
    email: "employee8@gmail.com",
    name: "Employee ",
    age: 22,
    password: "$2b$10$/.SuIceX0PM1lBzR45WKJOCNh6OYMqPgUAT0CB5dtDQ5EFdRf5VA.",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 2,
    status: "INACTIVE",
    role: "UX",
    address: {
      id: 26,
      createdAt: "2025-05-23T01:39:01.370Z",
      updatedAt: "2025-05-23T01:39:01.370Z",
      deletedAt: null,
      line1: "123 Mascrch Street, kochi",
      pincode: "849314",
      line2: "Ernakulam,Kerala",
      houseNo: "123",
    },
    department: {
      id: 3,
      createdAt: "2025-05-23T00:54:44.817Z",
      updatedAt: "2025-05-23T00:54:44.817Z",
      deletedAt: null,
      name: "Design",
    },
  },
  {
    id: 28,
    createdAt: "2025-05-23T05:38:32.757Z",
    updatedAt: "2025-05-23T05:38:32.757Z",
    deletedAt: null,
    email: "employee9@gmail.com",
    name: "Employee 9",
    age: 22,
    password: "$2b$10$pZqnoY3aQH8Lglh4F2mDWOEu8x0q/ysMJmBi/LfUK0XCDMj0mn.ES",
    employeeId: "1",
    dateOfJoining: "2025-05-23T01:25:39.175Z",
    experience: 2,
    status: "INACTIVE",
    role: "UX",
    address: {
      id: 27,
      createdAt: "2025-05-23T05:38:32.757Z",
      updatedAt: "2025-05-23T05:38:32.757Z",
      deletedAt: null,
      line1: "123 Mascrch Street, kochi",
      pincode: "849314",
      line2: "Ernakulam,Kerala",
      houseNo: "123",
    },
    department: {
      id: 3,
      createdAt: "2025-05-23T00:54:44.817Z",
      updatedAt: "2025-05-23T00:54:44.817Z",
      deletedAt: null,
      name: "Design",
    },
  },
];
    const emp = employees.find((emp) =>(emp.id == Number(id)))
    if(!emp)
        return <p>Not found</p>
    const [employee,setEmployee] = useState({
        id: emp.id,
        name:emp.name,
        email:emp.email,
        experience:emp.experience,
        role:emp.role,
        age:emp.age,
        joining:emp.dateOfJoining,
        status:emp.status,
        address:emp.address
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
            Edit Employee
        </div>
        <form>
            <div className='formgroup'>
                <div className='editparentclass'>
                    <Input label='Employee Name' type='text' id='name' placeholder='Employee Name' value = {employee.name} onChange={(e)=>onChange("name",e.target.value)} />
                    <Input label='Email' type='text' id='Email' placeholder='Email' value={employee.email} onChange ={(e) => onChange("email",e.target.value)}/>

                    <Input label='Joining Date' type='text' id='Joining Date' placeholder='Joining Date' value = {employee.joining} onChange={(e)=>onChange("joining",e.target.value)}/>
                    <Input label='Experience' type='text' id='Experience' placeholder='Experience' value = {employee.experience.toString()} onChange={(e)=>onChange("experience",e.target.value)}/>
                    <Input label='Age' type='Number' id='Age' placeholder='Age' value={employee.age} onChange ={(e) => onChange("age",e.target.value)}/>
                    
                    <Select label='Department' id='department' options={[{ value: 'DESIGN', label: 'DESIGN' }, { value: "PRODUCT", label: "PRODUCT" }]} onChange={(e)=>onChange("department",e.target.value)}/>
                    <Select label='Role' id='role' options={[{ value: 'HR', label: 'HR' },{ value: 'DEVELOPER', label: 'DEVELOPER' }, { value: "UX", label: "UX" }, { value: "UI", label: "UI" }]} onChange={(e)=>onChange("role",e.target.value)}/>
                    <Select label='Status' id='status' options={[{ value: 'Probation', label: 'Probation' }, { value: 'Inactive', label: 'Inactive' },{ value: "Active", label: "Active" }]} onChange={(e)=>onChange("status",e.target.value)}/>
                    <Input label='EmpoloyeeId' type='text' id='EmployeeId' value={id} />

                    <div className='AddressContainer'>
                        <Input label='Address' type='text' id='Address1' placeholder='Flat No./House No' value = {employee.address.houseNo}  onChange={(e)=>onChange("address",e.target.value)}/>
                        <Input type='text' id='Address2' placeholder='Address Line 1' value = {employee.address.line1}  onChange={(e)=>onChange("address",e.target.value)}/>
                        <Input type='text' id='Address3' placeholder='Address Line 2' value = {employee.address.line2} onChange={(e)=>onChange("address",e.target.value)}/>
                        <Input type='text' id='Pincode' placeholder='Pincode' value = {employee.address.pincode} onChange={(e)=>onChange("address",e.target.value)}/>
                    </div>

                </div>
                <div className='twobuttonform'>
                    <Button text="Create" variant='primary'/>
                    <Button text='Cancel' variant='secondary' type="reset" />
                </div>
            </div>
        </form>
        </>
        // </Layout>
    )
}