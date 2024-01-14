import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/pagesStyles/JoinUs.css"
import PageHeader from '../components/PageHeader';
import HeaderImage from "../assets/joinuspage.jpg"

export default function JoinUsPage(){

  return(
    <div> 
         {/* <Navbar />
          <h1>this is join us page</h1> */}
          <PageHeader
            title = "Join Us"
            image = {HeaderImage}
            />
          <div class="joinus-container">
          <form>
          <div className="joinus-div">
              <div className="joinus-div-left"> 
              <lable className="lbl">Name</lable><br/>
              <input type="text" className="text-input" id="name" placeholder="Your name here.." />
              </div>
         

              <div className="joinus-div-right">
              <lable className="lbl">Email</lable><br/>
              <input type="text" className="text-input" id="email" placeholder="Your email here.." />
              </div>
          </div>
             

              <div className="joinus-div">
              <div className="joinus-div-left">
              <lable className="lbl">Contact Number (WhatsApp) </lable><br/>
              <input type="text" className="text-input"  id="contact-no" placeholder="Your contact number here.." />
              </div>

              <div className="joinus-div-right">
              <lable className="lbl">Current Profession</lable><br/>
              <select id="profession" className="text-input" >
                <option value="">--Select--</option>
                <option value="Undergraduate student">Undergraduate student</option>
                <option value="Post Graduate student">Post Graduate student</option>
                <option value="Research scholar">Research scholar</option>
                <option value="Other">Other</option>
              </select>
              </div>
              </div>


              <div className="joinus-div">
              <div className="joinus-div-left">
              <lable className="lbl">Campus in which you mainly reside?</lable><br/>
              <select id="campus"  className="text-input">
                <option value="">--Select--</option>
                <option value="Main Campus">Main Campus</option>
                <option value="Transit Campus">Transit Campus</option>
              </select>
              </div>

              <div className="joinus-div-right">
              <lable className="lbl">Which project do you want to join? </lable><br/>
              <select id="project"  className="text-input">
                <option value="">--Select--</option>
                <option value="Paathshala">Paathshala</option>
                <option value="School Outreach">School Outreach</option>
              </select>
              </div>
              </div>

              <div className="joinus-div-single">
              <div>
              <lable className="lbl">The Team which would you like to join (can be changed later on)? </lable><br/>
              <select id="team"  className="text-input">
                <option value="">--Select--</option>
                <option value="Public Relations and Sponserships">Public Relations and Sponserships</option>
                <option value="Social Media">Social Media</option>
                <option value="Office Works">Office Works</option>
                <option value="Accounts and Logistics">Accounts and Logistics</option>
              </select>
              </div>
              </div>

              <div className="joinus-div-single">
              <div>
              <lable className="lbl">Why do you want to join Pehchaan Ek Safar?  </lable><br/>
              <input type="text"  className="text-input" id="why-to-join" placeholder="Your answer.." />
              </div>
              </div>

              <div className="joinus-div-single">
              <div>
              <lable className="lbl">What value will you bring to Pehchaan Ek Safar and what do you expect from us?  </lable><br/>
              <input type="text"  className="text-input" id="what-value" placeholder="Your answer.." />
              </div>
              </div>
          
              <div className="joinus-div-single">
              <div>
              <button id="btn-submit"  className="joinus-submit">Submit</button>
              </div> 
              </div>
              </form>
          </div>
          <Footer/>
    </div>
  )
        
}
