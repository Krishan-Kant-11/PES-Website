import "../styles/componentsStyles/StickyDonateButton.css"
import {Link} from "react-router-dom"

function StickyDonateButton(props){
    return(
        <>
        <div className="StickyDonateButton">
            <Link to="/donate" className="StickyButtonText"><p>&#10084; Donate</p></Link>
        </div>
        </>
    )
}

export default StickyDonateButton;