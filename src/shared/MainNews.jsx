import React from 'react';
import { useLoaderData } from 'react-router-dom';
import News from '../components/News';

const MainNews = () => {
    const news = useLoaderData();
    return (
        <div className='border border-slate-200 rounded-lg'>
            
            {
                news.map(mainNews=><News
                     key={mainNews._id}
                     mainnews={mainNews}
                     ></News>)
            }
        </div>
    );
};

export default MainNews;