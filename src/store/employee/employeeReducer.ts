import type { EmployeeAction, EmployeeState } from "./employee.types";
import { EMPLOYEE_ACTION_TYPES } from "./employee.types";

const initialState = {employees:[]};

function employeeReducer(state:EmployeeState =initialState, action:EmployeeAction):EmployeeState {
    switch(action.type){
        case EMPLOYEE_ACTION_TYPES.DELETE:
            return {
                ...state,
                employees:state.employees.filter((emp)=>action.payload!==emp.employeeId)
            }
        case EMPLOYEE_ACTION_TYPES.UPDATE:
            return {
                ...state,
                employees:state.employees.map((emp)=>{
                    if(action.payload.employeeId == emp.employeeId)

                        return {...emp,...action.payload}
                    else
                        return emp;
                })
            }
        case EMPLOYEE_ACTION_TYPES.ADD:
            // console.log(state.employees)
            return {
                ...state,
                employees:[...state.employees,action.payload]
            }

        default : return state;
    }
    return state;
}

export default employeeReducer;