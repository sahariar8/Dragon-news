import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../shared/Header'
import RightSidebar from '../shared/RightSidebar'
import Details from './Details';
import Navbar from '../shared/Navbar';

const NewsDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-4 mt-5'>
               <div className='md:col-span-3'>
                    <Details></Details>
               </div>
                <RightSidebar></RightSidebar>
                
            </div>
        </div>
    );
};

export default NewsDetails;