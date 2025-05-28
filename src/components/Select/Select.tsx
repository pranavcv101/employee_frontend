import './Select.css'

export const Select=({options,id,label}:{options:SelectOption[],id:string,label:string}) => {
    return <div className='SelectWrapperContainer'>
        <label>{label}</label>
        <select id={id} className='selectinputWrapper'>
            { options.map ((option) => <option key = {option.value} value={option.value}> {option.label}</option>)}
        </select>
    </div>
}

export type SelectOption = {
    value:string,
    label:string
}