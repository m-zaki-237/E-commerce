import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:6900/user/login",userInfo)
    .then((res)=>{
      console.log(res.data); 
      if(res.data){
        toast.success('Successfully Logged in!');
        setTimeout(()=>{
          document.getElementById("my_modal_3").close()
          window.location.reload();
          localStorage.setItem("Users",JSON.stringify(res.data.user))
        },3000)
      }
    }).catch((err)=>{
      console.log(err);
      toast.error('error Logging in: ' + err.response.data.message); 
      setTimeout(()=>{},3000)
    })
  };


  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>
              document.getElementById("my_modal_3").close()
            }
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Hello!</h3>
            <div className="mt-4 space-y-2 py-1">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-red-400 text-sm'>This field is required</span>}
            </div>
            <div className="mt-4 space-y-2 py-1">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className='text-red-400 text-sm'>This field is required</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="badge-error text-white rounded-md px-3 py-1 hover:bg-red-500 duration-200"
              >
                Login
              </button>
              <p>
                Not registered?
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
