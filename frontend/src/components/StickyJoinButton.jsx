import "../styles/componentsStyles/StickyJoinButton.css"
import {Link, NavLink} from "react-router-dom"

function StickyJoinButton(props){
    return(
        <>
        <div className="StickyJoinButton">
            <Link to="/joinus" className="StickyButtonText"><p>&#10022; Join Us</p></Link>
        </div>
        </>
    )
}

export default StickyJoinButton;