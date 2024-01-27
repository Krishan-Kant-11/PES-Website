import "../styles/componentsStyles/Testimonial2.css"

function Testimonial2(props){
    return(
        <div className="testimonial2">
            {/* <img src={props.img} className="testimonial2-img"></img> */}
            <div className="testimonial2-content">
                <p className="testimonial2-p">"{props.description}"</p>
                <h2 className="testimonial2-name">{props.name}</h2>
            </div>
        </div>
    )
}

export default Testimonial2;