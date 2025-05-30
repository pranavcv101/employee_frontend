import './CreateEmployee.css'
import { Layout } from '../../components/Layout/Layout'
import Input from '../../components/Input/input'
import { Select } from '../../components/Select/Select'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

export const CreateEmployee = () => {
    const navigate = useNavigate()
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
                    <Input label='Employee Name' type='text' id='Employee Name' placeholder='Employee Name' />
                    <Input label='Email' type='text' id='Email' placeholder='Email' />
                    <Input label='Joining Date' type='date' id='Joining Date' placeholder='Joining Date' />
                    <Input label='Experience' type='text' id='Experience' placeholder='Experience' />
                    <Input label='Age' type='Number' id='Age' placeholder='Age' />
                    
                    <Select label='Department' id='department' options={[{ value: 'DESIGN', label: 'DESIGN' }, { value: "PRODUCT", label: "PRODUCT" }]}/>
                    <Select label='Role' id='role' options={[{ value: 'HR', label: 'HR' },{ value: 'DEVELOPER', label: 'DEVELOPER' }, { value: "UX", label: "UX" }, { value: "UI", label: "UI" }]} />
                    <Select label='Status' id='status' options={[{ value: 'Probation', label: 'Probation' }, { value: 'Inactive', label: 'Inactive' },{ value: "Active", label: "Active" }]} />
                    <Input label='Employee Id' type='text' id='Employeeid' placeholder='Employee ID' />

                    <div className='AddressContainer'>
                        <Input label='Address' type='text' id='Address1' placeholder='Flat No./House No' />
                        <Input type='text' id='Address2' placeholder='Address Line 1' />
                        <Input type='text' id='Address3' placeholder='Address Line 2' />
                        <Input type='text' id='Pincode' placeholder='Pincode' />
                    </div>
                </div>
                <div className='twobuttonform'>
                    <Button text="Create" variant='primary'/>
                    <Button text='Cancel' variant='secondary' type="reset" onClick={()=>{navigate('/employees/employeelist')}} />
                </div>
            </div>
        </form>
        </>
        // </Layout>
    )
}