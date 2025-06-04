import { GetEmployeeById } from "../../pages/GetEmployee/GetEmployeeById";
import type{ EmployeeId } from "./types";

import baseApi from "../api";
import type { Employee } from "../../store/employee/employee.types";
import { CreateEmployee } from "../../pages/Create_Employee/CreateEmployee";


export const employeeApi = baseApi.injectEndpoints({
    endpoints:(builder)=> ({
        getEmployeeList:builder.query({
            query: () => '/employee',
            providesTags:['EMPLOYEES']
        }),
        deleteEmployee : builder.mutation<void,EmployeeId>({
            query:({id}) => ({
                url:`/employee/${id}`,
                method:'DELETE'
            }) ,
            invalidatesTags:['EMPLOYEES']
        }) ,
        GetEmployeeById :builder.query<Employee,EmployeeId>({
            query: ({id})=>({
                method:'GET',
                url:`/employee/${id}`
            }),
            providesTags:['EMPLOYEE_DETAILS']

        }) ,
        updateEmployee : builder.mutation<Employee,Employee>({
            query : (employee)=> ({
                url:`/employee/${employee.id}`,
                method : 'PUT',
                body:employee
            }),
            invalidatesTags:['EMPLOYEE_DETAILS']

        }),
        CreateEmployee: builder.mutation<Employee,Employee> ({
            query :  (employee) => ({
                url:`/employee`,
                method:'POST',
                body:employee
            }),
            invalidatesTags:['EMPLOYEES']
        })
    })
});

export const {useGetEmployeeListQuery , useDeleteEmployeeMutation ,useGetEmployeeByIdQuery ,useUpdateEmployeeMutation , useCreateEmployeeMutation} = employeeApi;