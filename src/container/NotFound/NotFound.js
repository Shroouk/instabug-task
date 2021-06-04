import React from 'react';
import not from '../../assets/imgs/notfound.png';
import './NotFound.css'

const NotFound = ()=>{

    return(
        <>
        <img className="i-mt-2" src={not} alt="notfound img"/>
        <h2 className="notfound-heading">404 - Page Not Found!</h2>
        <h5 className="notfound-txt">Sorry, that page doesn’t exist. What would you like to do?</h5>
        </>
    )

}

export default NotFound;