import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment/moment';


const Header = () => {
    return (
      <div className="max-w-screen-xl mx-auto font-poppins">
        <img src={logo} alt="" className="mx-auto my-3" />
        <p className="text-center text-slate-600">
          Journalism Without Fear or Favour
        </p>
        <p className="text-center font-semibold text-slate-600 mt-2">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
        
      </div>
    );
};

export default Header;