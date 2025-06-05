import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath:"employeeApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:4000",
        prepareHeaders:(headers) => {
            const token = localStorage.getItem('token');
            if(token) {
                headers.set("Authorization",`Bearer ${token}`);
            }
            return headers;
        }
    }),
    
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true,
    endpoints:()=>({}),
    tagTypes: ['EMPLOYEES', 'EMPLOYEE_DETAILS','DEPARTMENT']
})

export default baseApi;