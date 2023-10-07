import React, { useContext, useState } from 'react';
import { NavLink,Link, useNavigate } from 'react-router-dom';
import pp from '../assets/user.png';
import { AuthContext } from '../components/ContextProvider';

const Navbar = () => {

  const { user,userLogOut } = useContext(AuthContext)
  const [success,setSuccess] = useState('');
  const navigate = useNavigate();
  const handleLogOut = () =>{
             userLogOut()
             .then(()=>{
              navigate('/login')
              setSuccess('Sign Out SuccessFully')
             })
             .catch(error=>{
              console.log(error.message)

             })
  }
    return (
        <div className='font-poppins'>
             <div className="max-w-screen-xl mx-auto font-semibold  text-slate-500 mt-3">
        <div className="flex items-center">
          <div className="w-1/5"></div>
          <div className="text-center w-3/5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about" className="mx-5">
              About
            </NavLink>
            <NavLink to="/career">Career</NavLink>
          </div>

          <div className="w-1/5 justify-end flex items-center">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-1">
              <div className="w-10 rounded-full">
                <img src={pp} />
              </div>
            </label>
            {
                user ?
              
                  <button className=" bg-slate-600 text-white px-6 py-1" onClick={handleLogOut}>
                  Sign Out
                  </button>
                
                
                :
                  <div>
                    <Link to="/login">
                      <button className=" bg-slate-600 text-white px-6 py-1">
                          Sign In
                      </button>
                      </Link>
                        {
                          <p className='text-green-600 font-bold'>{success}</p>
                        }
                  </div>
            }
          </div>
        </div>
      </div>
        </div>
    );
};

export default Navbar;