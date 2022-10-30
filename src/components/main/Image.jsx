import useImage from "../../hooks/useImage";
import NoImage from '../../assets/image/main/portfolio/no_image.jpg'
const Image = ({ fileName, alt, className, ...rest }) => {
    const { loading, error, image } = useImage(fileName)

    if (error) return <><img
        className={`Image${
            className
                ? className.padStart(className.length + 1)
                : ''
        }`}
        src={NoImage}
        alt="No image"/>
        </>

    return (
        <>
            {loading ? (
                <div>loading</div>
            ) : (
                <img
                    className={`Image${
                        className
                            ? className.padStart(className.length + 1)
                            : ''
                    }`}
                    src={image}
                    alt={alt}
                    {...rest}
                />
            )}
        </>
    )
}

export default Image