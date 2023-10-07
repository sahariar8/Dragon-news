import React, { useContext } from 'react';
import { AuthContext } from './ContextProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../shared/Navbar';


const Login = () => {
    const {userLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    console.log(userLogin);
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        userLogin(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(location?.state ? location.state : '/');
            
        })
        .catch(error=>{
            console.log(error)
        })

    }

    return (
     
        <>
            <Navbar></Navbar>
            <div className='bg-slate-300 w-2/6 mx-auto p-10 font-poppins mt-20 rounded-lg' >
            <h1 className='text-center text-3xl font-poppins font-bold mt-4 mb-8'>Login your Account</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email" className='font-bold'>Email Address</label><br />
                <input type="email" name='email' placeholder='Enter your email adress'className='input input-bordered w-full my-3' /><br />
                <label htmlFor="password" className='font-bold'>Password</label><br />
                <input type="password" name='password' placeholder='Enter your password'className='input input-bordered w-full my-3' /><br />
                <input type="submit" value='Login' className='w-full btn btn-secondary my-2' />
                <p className='font-semibold text-center my-3'>Don't Have An Account?<Link to='/register' className='text-red-600'>Register</Link></p>
            </form>
        </div>
        </>
    );
};

export default Login;