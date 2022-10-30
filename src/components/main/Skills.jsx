import React from 'react';
import classes from "./Skills.module.css";
import {TiHtml5, TiCss3, TiLightbulb} from 'react-icons/ti';
import {DiSass} from 'react-icons/di';
import {FaBootstrap, FaReact, FaGithub} from 'react-icons/fa';
import {TbBrandJavascript, TbStairsUp} from 'react-icons/tb';
import {SiAiohttp} from 'react-icons/si';
import {TbSocial} from 'react-icons/tb';
import {BsExclamationCircle, BsShieldCheck} from 'react-icons/bs';
import {RiTeamFill} from 'react-icons/ri';
import HTML from '../../assets/image/main/skills/html.png';
import CSS from '../../assets/image/main/skills/css.png';
import JS from '../../assets/image/main/skills/js.png';
import SASS from '../../assets/image/main/skills/sass.png';
import BS from '../../assets/image/main/skills/bootstrap.png';
import REACT from '../../assets/image/main/skills/react.png';
import AJAX from '../../assets/image/main/skills/ajax.png';
import GIT from '../../assets/image/main/skills/github.png';
import SOCIABLE from '../../assets/image/main/skills/sociable.png';
import CREATIVE from '../../assets/image/main/skills/creative.png';
import DISCIPLINE from '../../assets/image/main/skills/discipline.png';
import MOTIVATION from '../../assets/image/main/skills/motivation.png';
import TEAMWORK from '../../assets/image/main/skills/teamwork.png';
import DEPENDABILITY from '../../assets/image/main/skills/dependability.png';
import SKILLS from '../../assets/image/main/skills/skills.png';


import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeIn = styled.div`animation: 3s ${keyframes`${fadeIn}`} `;



const Skills = () => {
    return (
        <FadeIn>
        <div className={classes.container}>
            <div className={classes.skillsBlock}>
                <h3 className={classes.skillsTitle}>Technical skills</h3>
                <ul className={classes.skillsList}>
                    <li className={classes.skillsElement}><TiHtml5/> HTML5 <img className={classes.skillsElementBg} src={HTML} alt="html_bg"/></li>
                    <li className={classes.skillsElement}><TiCss3/> CSS3 <img className={classes.skillsElementBg} src={CSS} alt="css_bg"/></li>
                    <li className={classes.skillsElement}><DiSass/> Sass/Scss <img className={classes.skillsElementBg} src={SASS} alt="sass_bg"/></li>
                    <li className={classes.skillsElement}><FaBootstrap/> Bootstrap <img className={classes.skillsElementBg} src={BS} alt="bootstrap_bg"/></li>
                    <li className={classes.skillsElement}><TbBrandJavascript/> JavaScript <img className={classes.skillsElementBg} src={JS} alt="js_bg"/></li>
                    <li className={classes.skillsElement}><FaReact/> React/Redux <img className={classes.skillsElementBg} src={REACT} alt="react_bg"/></li>
                    <li className={classes.skillsElement}><SiAiohttp/> Ajax, Fetch <img className={classes.skillsElementBg} src={AJAX} alt="ajax_bg"/></li>
                    <li className={classes.skillsElement}><FaGithub/> Git/Github <img className={classes.skillsElementBg} src={GIT} alt="git_bg"/></li>
                </ul>
            </div>
            <div className={classes.skillsBlock}>
                <h3 className={classes.skillsTitle}>Soft skills</h3>
                <ul className={classes.skillsList}>
                    <li className={classes.skillsElement}>Sociable <TbSocial/> <img className={classes.skillsElementBg} src={SOCIABLE} alt="sociable_bg"/></li>
                    <li className={classes.skillsElement}>Creative thinking <TiLightbulb/><img className={classes.skillsElementBg} src={CREATIVE} alt="creative_bg"/></li>
                    <li className={classes.skillsElement}>Discipline <BsExclamationCircle/> <img className={classes.skillsElementBg} src={DISCIPLINE} alt="discipline_bg"/></li>
                    <li className={classes.skillsElement}>Motivation <TbStairsUp/> <img className={classes.skillsElementBg} src={MOTIVATION} alt="motivation_bg"/></li>
                    <li className={classes.skillsElement}>Teamwork <RiTeamFill/> <img className={classes.skillsElementBg} src={TEAMWORK} alt="teamwork_bg"/></li>
                    <li className={classes.skillsElement}>Dependability <BsShieldCheck/> <img className={classes.skillsElementBg} src={DEPENDABILITY} alt="react_bg"/></li>
                </ul>

            </div>
            <img className={classes.skillsBg}  src={SKILLS} alt="skills_bg"/>




        </div>
            </FadeIn>
    );
};

export default Skills;
