// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import "../components/header.css";

const Header = () => {
    return (
        <>
            <div className='header'>
                <h1 className='title'>Call a Friend</h1>
                <p className='subtitle'>Your Contact App</p>
            </div>
        </>
    )
}

export default Header;