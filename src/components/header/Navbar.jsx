import React from "react";
import {NavLink} from "react-router-dom";
import {BsInfoCircle} from 'react-icons/bs'
import {GiSkills} from 'react-icons/gi'
import {MdFolderShared} from 'react-icons/md'
import {IoSchool} from 'react-icons/io5'
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.list}>
                <NavLink  to={'/My-portfolio/'}  className = { navData => navData.isActive ? classes.active : classes.item }>
                    <div>
                        <span className={classes.icon}><BsInfoCircle color="white"/></span>
                        <span className={classes.text}>About me</span>
                    </div>
                </NavLink>
                <NavLink to={'/My-portfolio/skills'}  className = { navData => navData.isActive ? classes.active : classes.item }>
                    <div>
                        <span className={classes.icon}><GiSkills color="white"/></span>
                        <span className={classes.text}>Skills</span>
                    </div>
                </NavLink>
                <NavLink to={'/My-portfolio/portfolio'}  className = { navData => navData.isActive ? classes.active : classes.item }>
                    <div>
                        <span className={classes.icon}><MdFolderShared color="white"/></span>
                        <span className={classes.text}>Portfolio</span>
                    </div>
                </NavLink>
                <NavLink to={'/My-portfolio/education'}  className = { navData => navData.isActive ? classes.active : classes.item }>
                    <div>
                        <span className={classes.icon}><IoSchool color="white"/></span>
                        <span className={classes.text}>Education</span>
                    </div>
                </NavLink>
                <div className={classes.indicator}></div>
            </div>
        </div>
    )
}

export default Navbar;