
import axios from "axios";
import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin=()=>{
    const {user}=useContext(authContext);
    const {data:isAdmin}=useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn:async()=>{
            const res= await axios.get(`http://localhost:3000/api/users/find/${user?.email}`);
            return res.data
        }
    })
    
    return isAdmin?.admin
}
export default useAdmin;