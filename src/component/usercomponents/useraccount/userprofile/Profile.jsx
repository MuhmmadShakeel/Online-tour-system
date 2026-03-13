import React,{useState,useEffect} from "react"
import {UserCircle,Edit,Trash2,Plus,Settings} from "lucide-react"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"

import {
useGetUserQuery,
useCreateUserMutation,
useUpdateUserMutation,
useDeleteUserMutation
} from "../../../../redux/api/UserApi"

function Profile(){

const userId = localStorage.getItem("userId")

const {data,isLoading,refetch} = useGetUserQuery(userId)

const [createUser] = useCreateUserMutation()
const [updateUser] = useUpdateUserMutation()
const [deleteUser] = useDeleteUserMutation()

const user = data?.user

const [modalType,setModalType] = useState(null)

const [form,setForm] = useState({
name:"",
role:"",
file:null
})

const [preview,setPreview] = useState(null)


/* PREFILL */

useEffect(()=>{

if(modalType==="edit" && user){

setForm({
name:user.name,
role:user.role,
file:null
})

setPreview(user?.profileImage?.url)

}

},[modalType,user])


/* FORM */

const handleChange=(e)=>{

setForm({
...form,
[e.target.name]:e.target.value
})

}

const handleFile=(e)=>{

const file=e.target.files[0]

setForm({
...form,
file:file
})

if(file){
setPreview(URL.createObjectURL(file))
}

}

const closeModal=()=>{

setModalType(null)

setForm({
name:"",
role:"",
file:null
})

setPreview(null)

}


/* CREATE */

const handleCreate=async()=>{

try{

const formData=new FormData()

formData.append("name",form.name)
formData.append("role",form.role)

if(form.file){
formData.append("profileImage",form.file)
}

const res=await createUser(formData).unwrap()

toast.success(res.message)

refetch()

closeModal()

}catch(error){

toast.error(error?.data?.message)

}

}


/* UPDATE */

const handleUpdate=async()=>{

try{

const formData=new FormData()

formData.append("name",form.name)
formData.append("role",form.role)

if(form.file){
formData.append("profileImage",form.file)
}

const res=await updateUser({
id:user._id,
formData
}).unwrap()

toast.success(res.message)

refetch()

closeModal()

}catch(error){

toast.error(error?.data?.message)

}

}


/* DELETE */

const handleDelete = async () => {

try {

await deleteUser(user._id).unwrap()

toast.success("Profile deleted successfully")

closeModal()

} catch (error) {

toast.error(error?.data?.message || "Delete failed")

}

}


/* LOADING */

if(isLoading){

return(

<div className="flex justify-center mt-32 text-gray-500">

Loading profile...

</div>

)

}


return(

<div className="min-h-screen bg-gray-50 pt-28 flex justify-center">

<div className="relative w-full max-w-xl bg-white shadow-xl rounded-3xl p-8">


<div className="absolute top-4 right-4">

<Link
to="/account"
className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-[#237227] text-white"
>

<Settings size={14}/>
Manage Account

</Link>

</div>


<div className="flex flex-col items-center">

<div className="w-28 h-28 rounded-full overflow-hidden shadow">

{user?.profileImage?.url ?

<img
src={user.profileImage.url}
className="w-full h-full object-cover"
/>

:

<UserCircle size={90} className="text-[#237227]"/>

}

</div>


<h2 className="mt-4 text-xl font-bold text-[#237227]">

{user?.name}

</h2>

{/* ROLE DISPLAY */}

<p className="text-sm text-gray-500 mt-1 capitalize">

{user?.role}

</p>

</div>


<div className="mt-10 grid grid-cols-3 gap-3">

<button
onClick={()=>setModalType("create")}
className="bg-yellow-400 text-white flex items-center justify-center gap-1 py-2 rounded-lg"
>

<Plus size={14}/>Create

</button>


<button
onClick={()=>setModalType("edit")}
className="border border-green-700 text-green-700 flex items-center justify-center gap-1 py-2 rounded-lg"
>

<Edit size={14}/>Update

</button>


<button
onClick={()=>setModalType("delete")}
className="border border-yellow-400 text-yellow-500 flex items-center justify-center gap-1 py-2 rounded-lg"
>

<Trash2 size={14}/>Delete

</button>

</div>

</div>


{modalType && (

<div className="fixed inset-0 bg-black/40 flex items-center justify-center">

<div className="bg-white p-6 rounded-xl w-[400px]">

<h3 className="text-lg font-bold mb-4 capitalize">

{modalType} Profile

</h3>


{(modalType==="create" || modalType==="edit") && (

<div className="space-y-3">

<input
name="name"
value={form.name}
onChange={handleChange}
placeholder="Enter name"
className="w-full border p-2 rounded"
/>

{/* ROLE INPUT */}

<select
name="role"
value={form.role}
onChange={handleChange}
className="w-full border p-2 rounded"
>

<option value="">Select Role</option>
<option value="User">User</option>
<option value="Admin">Admin</option>

</select>

<input type="file" onChange={handleFile}/>

{preview && (

<img
src={preview}
className="w-20 h-20 rounded-full object-cover"
/>

)}

</div>

)}


{modalType==="delete" && (

<p>Are you sure you want to delete profile?</p>

)}


<div className="flex justify-end gap-2 mt-6">

<button
onClick={closeModal}
className="px-4 py-2 border rounded"
>

Cancel

</button>


<button
onClick={
modalType==="create"
?handleCreate
:modalType==="edit"
?handleUpdate
:handleDelete
}
className="px-4 py-2 bg-[#237227] text-white rounded"
>

Confirm

</button>

</div>

</div>

</div>

)}

</div>

)

}

export default Profile