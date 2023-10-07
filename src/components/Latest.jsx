import React from 'react';
import Marquee from "react-fast-marquee";
const Latest = () => {
    return (
        <div  className='flex bg-slate-100 p-3 mt-8'>
          <p className="inline-block bg-red-600 px-6 py-3 text-white font-semibold">
            Latest
          </p>
            <Marquee>
              I can be a React component, multiple React components, or just
              some text.
            </Marquee>
        </div>
    );
};

export default Latest;