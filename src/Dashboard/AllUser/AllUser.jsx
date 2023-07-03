import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
    const {data:users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res= await axios.get('http://localhost:3000/api/users');
            return res.data
        }
    })
    

    const handleMakeAdmin=(user)=>{
        const info={role:'admin'}
        fetch(`http://localhost:3000/api/users/${user?._id}`,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
       
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                })

            
        })


    }
    const handleDelete=(user)=>{
      
        fetch(`http://localhost:3000/api/users/${user?._id}`,{
            method:"DELETE"
       
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
       
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is deleted`,
                    showConfirmButton: false,
                    timer: 1500
                })

            
        })


    }
    return (
        <div className="w-full bg-blue-400">
        <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Make Admin</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user?.role === 'admin' && 'admin'}
                            {user?.role!=='admin' && 'user'}
                           
                              
                                                           </td>
                            <td>
            
                                <button  onClick={() => handleMakeAdmin(user)}
                                disabled={`${user?.role==='admin'?true:''}`}
                                className='btn btn-ghost bg-orange-600  text-white'  ><FaUserShield></FaUserShield></button>
                            </td>
                        
                            <td><button onClick={()=>handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllUser;