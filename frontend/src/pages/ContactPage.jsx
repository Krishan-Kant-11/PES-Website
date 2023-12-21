import Navbar from "../components/Navbar"
import "../styles/pagesStyles/ContactPage.css"

function ContactPage(){
    return(
        <div class="main">
            <Navbar/>
            <div class="image"> <p>CONTACT US</p>  </div>
            <div class="text1s">
                <div class="quote1"><b>"The best way to find yourself is to lose yourself in the     service of others"   </b></div>
                <div class="quote2">       BY  Mahatma Gandhi</div>
            </div>
            <div class="form">
            <form> 
                <input type="text" id ="fname" name="firstname" placeholder="FIRST NAME"/>
                <input type="text" name="name" placeholder="LAST NAME"/>
                <br/>
                <input type="text" name="name" placeholder="EMAIL"/>
                <input type="text" name="name" placeholder="PHONE NO."/>
                <br/>
                <input type="text" name="name" placeholder="MOBILE"/>
                <input type="text" name="name" placeholder="COMPANY / ORGANISATION"/>
                <br/>
                <input type="text2" name="name" placeholder="WHAT CAN WE DO FOR YOU??"/>
                <br/>
                <input type="submit" value="SUBMIT"/>

            </form>
            </div>
            <br/> <br/> <br/>FOOTER 
        </div>
    )
}

export default ContactPage
