import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Details = () => {
    const {id} = useParams()
    
    const [infos,setInfos] = useState([]);
    useEffect(()=>{
        fetch('/news.json')
        .then(res=> res.json())
        .then(data=>setInfos(data));
    },[])
    const news = infos.find(detail=>detail._id == id);
    console.log(news);
    
    
    
    
    return (
        
        <div>
           <div className="mx-7">
            <div className="w-full mb-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full"
            src={news?.image_url}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {news?.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {news?.details}
          </p>
          
        </div>
      </div>
        </div>
        </div>
    );
};

export default Details;