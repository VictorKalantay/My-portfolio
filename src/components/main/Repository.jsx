import React from 'react';
import classes from "./Repository.module.css";
import Image from "./Image";
import styled, {keyframes} from 'styled-components';
import {pulse} from 'react-animations';

const Pulse = styled.div`animation: 4s infinite ${keyframes`${pulse}` }  `;

const Repository = ({created, name, description, homepage}) => {
    return (
        <a href={homepage} className={classes.container}>
            <div className={classes.content}>
                <div className={classes.title}>
                    {name}
                </div>
                <div className={classes.description}>
                    {description}
                </div>
                <div className={classes.created}>
                    Created - {created}
                </div>
            </div>
            <Pulse>
            <div className={classes.imageWrapper}>
            <Image className={classes.image} fileName={name}/>
            </div>
            </Pulse>
        </a>
    );
};

export default Repository;
