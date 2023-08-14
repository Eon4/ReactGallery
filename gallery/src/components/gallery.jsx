import style from '../styles/'
// import img1 from './assets/images/dog1.jpg'


export const Gallery = (props) => {

    return (
        <section className={style.galleryWrapper}>
            {props.input_array.map((item, index) => {
                return (
                    <img key={index} src={item} alt={"image"+index}/>
                )
            })}
        </section>
    )
}