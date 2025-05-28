import './CreateEmployee.css'
import { Layout } from '../../components/Layout/Layout'
import Input from '../../components/Input/input'
import { Select } from '../../components/Select/Select'
import Button from '../../components/Button/Button'

export const CreateEmployee = () => {
    return (
        // <Layout 
        //  sidebar='Employee List' header='Create Employees'
        //    >
        <form>
            <div className='formgroup'>
                <div className='parentclass'>
                    <Input label='Employee Name' type='text' id='Employee Name' placeholder='Employee Name' />
                    <Input label='Joining Date' type='date' id='Joining Date' placeholder='Joining Date' />
                    <Input label='Experience' type='text' id='Experience' placeholder='Experience' />


                    <Select label='Department' id='department' options={[{ value: 'devop', label: 'devop' }, { value: "manager", label: "manager" }]} />
                    <Select label='Role' id='role' options={[{ value: 'developer', label: 'developer' }, { value: "tester", label: "tester" }]} />
                    <Select label='Status' id='status' options={[{ value: 'trainee', label: 'trainee' }, { value: "full-time", label: "full-time" }]} />

                    <div className='AddressContainer'>
                        <Input label='Address' type='text' id='Address1' placeholder='Flat No./House No' />
                        <Input type='text' id='Address2' placeholder='Address Line 1' />
                        <Input type='text' id='Address3' placeholder='Address Line 2' />
                    </div>
                </div>
                <div className='form_group-submit'>
                    <Button text="Create" />
                    <Button text='Cancel' variant='secondary' />
                </div>
            </div>
        </form>
        // </Layout>
    )
}