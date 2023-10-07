import React, { useContext } from 'react';
import { AuthContext } from './ContextProvider';

const Career = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo.name);
    return (
        <div>
            <h1>this is Career</h1>
        </div>
    );
};

export default Career;