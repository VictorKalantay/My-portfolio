import React  from 'react';
import classes from "./Footer.module.css";
import useVisits from "../../hooks/useVisits";
import MyRadioBtn from "../UI/MyRadioBtn";
import MyThemeSwitch from "../UI/MyThemeSwitch";


const Footer = () => {

   const {visits, uniqueVisits} =  useVisits()



    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.visitsContainer}>
                    <p>Unique visitors: {uniqueVisits}</p>
                    <p>Total visitors: {visits}</p>
                </div>
                <MyThemeSwitch />
                <MyRadioBtn />


            </div>
        </footer>
    );
};

export default Footer;
