import classes from './Header_logo.module.css';
import Photo from '../../assets/image/header/photo.jpg';
const Header_logo = () => {
       return (
        <div className={classes.logo__container}>
            <div className={classes.logo}>
                <img src={Photo} alt="photo_logo"/>
            </div>
            <h3>Web developer / React</h3>
            <a className={classes.cvLink} href="CV_Victor_Kalantay.pdf" download="">Download my CV</a>
        </div>
    )
}

export default Header_logo