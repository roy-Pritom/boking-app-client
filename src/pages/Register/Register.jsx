import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { authContext } from "../../Provider/AuthProvider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";



const Register = () => {
    const {createUser,logOut,updateUserProfile}=useContext(authContext);
   const navigate=useNavigate();
    // const [succes,setSuccess]=useState('');
    const [error,setError]=useState('');
    const { register, handleSubmit,watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        setError('');
      
        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            updateUserProfile(data.name,data.photo)
            // .then(()=>{

                // const savedUser = { name: data.name, email: data.email,photoUrl:data.photo }
                // fetch('https://assignment-12-server-site-sepia.vercel.app/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(savedUser)
                // })
                // .then(res=>res.json())
                // .then(data=>console.log(data))

            // })
            
            logOut();
            Swal.fire({
                title: 'successfully register',
                text: 'Please Login',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              
            navigate('/login')
        })
        .catch(error=>{
            setError(error.message);
        })
        
    };


    return (
        <div className="md:p-10 p-6">
        <h2 className="text-2xl md:text-5xl font-bold text-center my-5">Register Now!</h2>
        <div className="hero  ">

            <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                <div className="">
                    <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740&t=st=1686077344~exp=1686077944~hmac=c4325337cc7db30d6f5c82c7f07430fd24305c587451364b3f56443e8df2dab5" className="w-[600px] h-[500px] rounded-lg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name?.type === 'required' && <p className="text-red-400">name is required</p>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email?.type === 'required' && <p className="text-red-400">email is required</p>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password"  {...register("password", { required: true,
                              minLength:6,
                              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })} className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-400">password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-400">Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-400">Password must have one Uppercase and one special character.</p>}

                          
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" placeholder="confirmPassword"  {...register("confirmPassword", { required: true,validate: (value) =>
                    value === watch("password") || "Passwords do not match.", })} className="input input-bordered" />
                            {errors.confirmPassword?.type === 'required' && <p className="text-red-400">password is required</p>}
                            {errors.confirmPassword?.type === 'required' && <p className="text-red-400"></p>}
                      

                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="url" placeholder="PhotoUrl"  {...register("photo", { required: true })} className="input input-bordered" />
                            {errors.photo?.type === 'required' && <p className="text-red-400">photoUrl is required</p>}
                            
                        </div>
                        <div className="form-control mt-4">
                            <input type="submit" className="btn btn-secondary" value="Register" />
                        </div>
                    </form>
                 
                       <SocialLogin></SocialLogin>
            
                    <div className="py-5 px-2">
                    <p  className='text-center'><small>Already have an account? Please <Link to='/login' className='text-orange-600 ml-1'>Login</Link></small></p>

                    </div>
                    <div className="p-2">
                        <p className="text-red-500 text-center">{error}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;