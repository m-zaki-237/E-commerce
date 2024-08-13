import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>
              document.getElementById("My_modal_3").showModal()
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
