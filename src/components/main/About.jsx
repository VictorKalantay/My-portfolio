import React, {useEffect, useRef} from "react";
import hoverEffect from 'hover-effect'
import "./About.css"
import Effect from "../../assets/image/main/about/effects.jpg"
import Photo1 from "../../assets/image/main/about/photo_on_park2.jpg"
import Photo2 from "../../assets/image/main/about/photo_with_blur2.jpg"

import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeIn = styled.div`animation: 3s ${keyframes`${fadeIn}`} `;


const About = () => {
    const img = useRef(null)
    useEffect(() => {
        const effect = new hoverEffect({
            parent: img.current,
            intensity: 0.3,
            image1: Photo2,
            image2: Photo1,
            displacementImage: Effect
        })
    })
    return (
        <FadeIn>
        <div className="about-container">
            <div className="photo-container">
                <div ref={img} className="photo"></div>
                Victor Kalantay, Kharkiv, Ukraine
            </div>
            <div className="about-text">
                <p className="about-content">
                    I am a beginner front-end developer. During my studies, I fell in love with web development and
                    programming. Now I am looking for my first job, where I could participate in interesting,
                    challenging projects in order to apply my skills in real practice, which would also allow me to
                    increase my knowledge in this area.
                </p>
                <p className="about-content">
                    I learn web development in different ways, trying to find the best way. I took an interactive <b>HTML </b>
                    and <b>CSS</b> course at the <i>HTML Academy</i> school. Further, to consolidate my knowledge, I wrote several
                    landing pages, studying along the way from the video and immediately putting into practice <b>Bootstrap </b>
                    and <b>Scss</b>.
                    After that I started learning <b>JS</b>. After watching a lot of theory videos, I took a great interactive
                    course at <i>lernjavascript.online</i>. This course included a lot of practice, including hands-on use of
                    <b> Ajax</b> and <b>Fetch</b> requests and typing in <b>Axios</b>. I applied this knowledge in my next landing. After
                    that, I started learning <b>React</b> / <b>Redux</b>. Having gained enough knowledge, I decide to create this
                    portfolio site. To be continued....


                </p>

            </div>
        </div>
            </FadeIn>
    )
}

export default About;
