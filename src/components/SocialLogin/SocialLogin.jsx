import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
    const {googleLogin}=useContext(authContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleGoogleLogin=()=>{
          googleLogin()
          .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            const saveUser = {email:loggedUser.email,name:loggedUser.displayName,role:"user"}
                fetch('http://localhost:3000/api/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        
                    })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login successfully',
                showConfirmButton: false,
                timer: 1500
              })
            navigate(from,{replace:true});
          })
          .catch(error=>{
            console.log(error.message);
          })
    }
    return (
        <div className="">
        <div className="divider w-full">OR</div>

       <div className="flex justify-center">
       <button onClick={handleGoogleLogin} className="font-semibold flex justify-center items-center gap-2 text-xl btn btn-outline btn-secondary"> <img src="https://i.ibb.co/3T5SxcN/google.png" style={{ height: "18px" }} alt="" /> Google</button>
       </div>
    </div>
    );
};

export default SocialLogin;