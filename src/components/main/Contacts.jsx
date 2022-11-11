import React from 'react';
import classes from "./Contacts.module.css";
import styled, {keyframes} from 'styled-components';
import {fadeIn, pulse} from 'react-animations';
import {BsLinkedin, BsFillTelephoneFill, BsGithub, BsInstagram} from 'react-icons/bs'
import {GrMailOption} from 'react-icons/gr'
import Form from "./Form";

const FadeIn = styled.div`animation: 3s ${keyframes`${fadeIn}`} `;
const Jello = styled.div`animation: 1s infinite ${keyframes`${pulse}`}  `;


const Contacts = () => {


    return (
        <FadeIn>
            <div className={classes.container}>
                <p className={classes.text}>
                    At the moment I am in the Kharkiv region. I am looking for remote or work in an office in
                    Kharkiv. In the future, I allow the option of moving.
                </p>
                <p className={classes.text}>
                    If you have any questions or would like me to call you back, please fill out the feedback form!
                </p>
                <div className={classes.feedback}>
                    <ul className={classes.socials}>
                        <li>
                            <a href="tel:+380501302491">
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <Jello>
                                    <BsFillTelephoneFill/>
                                </Jello>
                                <p className={classes.socialsContent}> +38 (050)-130-24-91</p>

                            </a>
                        </li>
                        <li>
                            <a href="mailto:v.kalantay@ukr.net">
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <Jello>
                                    <GrMailOption/>
                                </Jello>
                                <p className={classes.socialsContent}>v.kalantay@ukr.net</p>

                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/victorkalantay/" target='_blank'>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <Jello>
                                    <BsLinkedin/>
                                </Jello>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/VictorKalantay" target='_blank'>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <Jello>
                                    <BsGithub/>
                                </Jello>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/buti0wa" target='_blank'>
                                <span/>
                                <span/>
                                <span/>
                                <span/>
                                <Jello>
                                    <BsInstagram/>
                                </Jello>
                            </a>
                        </li>

                    </ul>
                    <Form/>

                </div>
            </div>
        </FadeIn>
    );
};

export default Contacts;
