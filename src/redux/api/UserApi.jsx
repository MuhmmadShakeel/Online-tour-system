import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const userApi = createApi({

reducerPath:"userApi",

baseQuery:fetchBaseQuery({

baseUrl:"http://localhost:5000/api/user",

prepareHeaders:(headers)=>{

const token = localStorage.getItem("token")

if(token){
headers.set("authorization",`Bearer ${token}`)
}

return headers

}

}),

tagTypes:["User"],

endpoints:(builder)=>({

getUser:builder.query({
query:()=>"/getuser",
providesTags:["User"]
}),

createUser:builder.mutation({
query:(formData)=>({
url:"/createuser",
method:"POST",
body:formData
}),
invalidatesTags:["User"]
}),

updateUser:builder.mutation({
query:({id,formData})=>({
url:`/updateuser/${id}`,
method:"PUT",
body:formData
}),
invalidatesTags:["User"]
}),

deleteUser:builder.mutation({
query:(id)=>({
url:`/deleteuser/${id}`,
method:"DELETE"
}),
invalidatesTags:["User"]
})

})

})

export const {
useGetUserQuery,
useCreateUserMutation,
useUpdateUserMutation,
useDeleteUserMutation
} = userApi