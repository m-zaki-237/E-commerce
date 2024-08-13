import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/bg.png';
import Login from './Login';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
    
  return (
    <>
      <div
        className='flex h-screen items-center justify-center'
        style={{
            backgroundImage:`url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="w-[500px] border-[2px] shadow-2xl  p-5 bg-white rounded-lg">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            
            <h3 className="font-bold text-lg">Signup!</h3>
            <div className='mt-4 space-y-2 py-1'>
              <span>Name</span>
              <br />
              <input type="name" placeholder='Enter your fullname' className='w-80 px-3 border rounded-md outline-none' 
              {...register("name", { required: true })}
              />
              <br />
              {errors.name && <span className='text-red-400 text-sm'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2 py-1'>
              <span>Email</span>
              <br />
              <input type="email" placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none' 
              {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-red-400 text-sm'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2 py-1'>
              <span>Password</span>
              <input type="password" placeholder='Enter your password' className='w-80 px-3 border rounded-md outline-none' 
              {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className='text-red-400 text-sm'>This field is required</span>}
            </div>
            <div className='flex justify-around mt-4'>
              <button
              type="submit"
              className='badge-error text-white rounded-md px-3 py-1 hover:bg-red-500 duration-200'>Signup</button>
              <p>Already registered? <button to="/" className='underline text-blue-500 cursor-pointer'
              onClick={()=>
                document.getElementById("my_modal_3").showModal()
              }
              >Login</button>
              <Login/>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
