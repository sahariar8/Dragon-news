import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../assets/1.png';
import pic2 from '../assets/2.png';
import pic3 from '../assets/3.png';
import {BsFillCalendarDateFill} from 'react-icons/bs';

const LeftSidebar = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    return (
      <div className="space-y-2">
        <h1 className="font-bold text-lg text-slate-600 ml-5">All Category</h1>
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            key={category.id}
            className="block font-semibold text-slate-500 ml-10"
          >
            {category.name}
          </Link>
        ))}

        <div className="card bg-base-100">
            <figure><img src={pic1} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
                </h2>
                <div className="flex items-center pt-3">
                    <div>
                        <h1 className="text-sm font-semibold text-slate-600">Sports</h1>
                    </div>
                    <div className='flex items-center ml-8'>
                    <BsFillCalendarDateFill />
                    <h1 className='text-sm font-semibold ml-2 text-slate-500'>Jan 4, 2022 </h1>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="card bg-base-100">
            <figure><img src={pic2} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
                </h2>
                <div className="flex items-center pt-3">
                    <div>
                        <h1 className="text-sm font-semibold text-slate-600">Sports</h1>
                    </div>
                    <div className='flex items-center ml-8'>
                    <BsFillCalendarDateFill />
                    <h1 className='text-sm font-semibold ml-2 text-slate-500'>Jan 4, 2022 </h1>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="card bg-base-100">
            <figure><img src={pic3} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
                </h2>
                <div className="flex items-center pt-3">
                    <div>
                        <h1 className="text-sm font-semibold text-slate-600">Sports</h1>
                    </div>
                    <div className='flex items-center ml-8'>
                    <BsFillCalendarDateFill />
                    <h1 className='text-sm font-semibold ml-2 text-slate-500'>Jan 4, 2022 </h1>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="card bg-base-100">
            <figure><img src={pic1} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                Bayern Slams Authorities Over Flight Delay to Club World Cup
                </h2>
                <div className="flex items-center pt-3">
                    <div>
                        <h1 className="text-sm font-semibold text-slate-600">Sports</h1>
                    </div>
                    <div className='flex items-center ml-8'>
                    <BsFillCalendarDateFill />
                    <h1 className='text-sm font-semibold ml-2 text-slate-500'>Jan 4, 2022 </h1>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    );
};

export default LeftSidebar;