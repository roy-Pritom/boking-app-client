import {  useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../Provider/AuthProvider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const Login = () => {
     const {logIn}=useContext(authContext)
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    const [error,setError]=useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        setError('');
        logIn(data.email,data.password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
 
            Swal.fire({
                title: 'success',
                text: 'successfully login',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              
              navigate(from,{replace:true})
        })
        .catch(error=>{
            setError(error.message);
        })
    };

    

    return (
        <div className="md:p-10 p-6">
            <h2 className="text-2xl md:text-5xl font-bold text-center my-5">Login Now!</h2>
            <div className="hero  ">

                <div className="hero-content flex-col lg:flex-row-reverse gap-16">
                    <div className="">
                        <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=740&t=st=1686071698~exp=1686072298~hmac=2405e0a979fa798cff52e9a4803f2fef75a0c6ce999c75c6e5c8c783d9861a94" className="w-[540px] h-[500px] rounded-lg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                                <input type="text" placeholder="password"  {...register("password", { required: true })} className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-400">password is required</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-4">
                                <input type="submit" className="btn btn-secondary" value="Login" />
                            </div>
                        </form>
                     
                          <SocialLogin></SocialLogin>
                
                        <div className="py-5 px-2">
                            <p className='text-center'><small>New to Here? Please <Link to='/register' className='text-orange-600 ml-1'>SignUp</Link></small></p>

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

export default Login;