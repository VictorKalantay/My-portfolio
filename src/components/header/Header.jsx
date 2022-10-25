import React from 'react';
import Header_logo from './Header_logo.jsx'
import classes from './Header.module.css';
import Navbar from "./Navbar";


const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Header_logo />
                <Navbar />
            </div>
        </header>
    )
}

export default Header;