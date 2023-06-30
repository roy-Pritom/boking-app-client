import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
            // const saveUser = {name:loggedUser.displayName,email:loggedUser.email,photoUrl:loggedUser.photoURL}
            //     fetch('https://assignment-12-server-site-sepia.vercel.app/users', {
            //         method: 'POST',
            //         headers: {
            //             'content-type': 'application/json'
            //         },
            //         body: JSON.stringify(saveUser)
            //     })
            //         .then(res => res.json())
            //         .then(() => {
                        
            //         })
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