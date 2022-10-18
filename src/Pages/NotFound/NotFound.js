import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notfound.png'

const NotFound = () => {
    return (
        <div>
            <h1>404 </h1>
            <h2>Page Not Found :)</h2>
            <img style={{width: '50%'}} src= {notFound} alt="" />
            <br />
            <Link to= "/home">
            <button >Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;


