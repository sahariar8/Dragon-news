import React, { useContext } from 'react';
import { AuthContext } from './ContextProvider';
import Navbar from '../shared/Navbar';
import { Link } from 'react-router-dom';

const Register = () => {
  const {createUser} = useContext(AuthContext)
  console.log(createUser);
    const authInfo = useContext(AuthContext);
    console.log(authInfo.name);
    const handleRegister = (e) =>{
            e.preventDefault();
            // const form = new FormData(e.currentTarget);
            // console.log(form);
            // const name = form.get('name');
            // const image = form.get('image');
            // const email = form.get('email');
            // const password = form.get('password');
            // console.log(name,image,email,password);
         
            const name = e.target.name.value;
            const image = e.target.image.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            const terms = e.target.terms.checked;
            console.log(name,image,email,password,terms);

            //createUser

            createUser(email,password)
            .then(result=>{
              console.log(result.user);
            })
            .catch(error=>{
              console.log(error.message);
            })
    }
    return (
      <>
      <Navbar></Navbar>
        <div className="bg-slate-300 md:w-2/6 mx-auto p-10 font-poppins mt-20 rounded-lg">
          <h1 className="text-center text-3xl font-poppins font-bold mt-4 mb-8">
            Register your Account
          </h1>
          <form onSubmit={handleRegister}>
            <label htmlFor="name" className="font-bold">
              Your Name
            </label>
            <br />
            <input
              type="name"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full my-3"
            />
            <br />
            <label htmlFor="image" className="font-bold">
              Photo URL
            </label>
            <br />
            <input type="file" name="image" className="w-full my-3" />
            <br />
            <label htmlFor="email" className="font-bold">
              Email Address
            </label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter your email adress"
              className="input input-bordered w-full my-3"
            />
            <br />
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full my-3"
            />
            <br />
            <div className="flex">
              <input type="checkbox" name="terms" />
              <p className="text-sm ml-3 font-semibold">
                Accept Terms & Conditions
              </p>
            </div>
            <input
              type="submit"
              value="Register"
              className="w-full btn btn-secondary my-2"
            />
            <div>
              <p className='text-sm font-semibold text-slate-500'>Already Have an Account? please<Link to='/login' className='text-blue-800 font-bold ml-1'>Login</Link></p>
            </div>
          </form>
        </div>
      </>
    );
};

export default Register;