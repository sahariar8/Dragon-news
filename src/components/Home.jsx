import React from 'react';
import Header from '../shared/Header';
import Navbar from '../shared/Navbar';
import LeftSidebar from '../shared/LeftSidebar';
import MainNews from '../shared/MainNews';
import RightSidebar from '../shared/RightSidebar.JSX';
import { useLoaderData } from 'react-router-dom';
import Latest from './Latest';


const Home = () => {
    // const news = useLoaderData();
    // console.log(news);
    return (
        <div>
            <Header></Header>
            <Latest></Latest>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4 mt-6'>
                <LeftSidebar></LeftSidebar>
                <div className='col-span-2'>
                <MainNews></MainNews>
                </div>
                <RightSidebar></RightSidebar>
            </div>
      
        </div>
    );
};

export default Home;