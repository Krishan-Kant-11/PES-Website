import { Link } from 'react-router-dom';
import "../styles/pagesStyles/OurTeamPage.css"
import TeamsCard from "../components/TeamsCard"
import PageHeader from '../components/PageHeader';
import HeaderImage from "../assets/header-testing.jpg"

// Importing the images of patrons and members
import PatronImage from  "../assets/PatronsandMembers/rajeev_sir.jpeg"
import MentorImage1 from "../assets/PatronsandMembers/pps_sir.jpeg"
import MentorImage2 from "../assets/PatronsandMembers/harpreet_sir.jpg"

//Importing the images of governing body
import VicePresidentImage from "../assets/governingbody/vajja.jpg"
import PresidentImage from "../assets/governingbody/shivam.jpg"
import SecretaryImage from "../assets/governingbody/sonal.jpg"
import TreasurerImage from "../assets/governingbody/mote.jpg"
import VicePresidentImage2 from "../assets/governingbody/reetika.jpg"

import MemberImage1 from "../assets/governingbody/nav.jpg"
import MemberImage2 from "../assets/governingbody/pranav.jpg"
import MemberImage3 from "../assets/governingbody/palla.png"
import MemberImage4 from "../assets/governingbody/ajay.jpg"
import MemberImage5 from "../assets/governingbody/pawan.jpg"
import MemberImage6 from "../assets/governingbody/priyanshu.jpg"
import MemberImage7 from "../assets/governingbody/mangy.jpg"

import profilepic from "../assets/governingbody/shivam.jpg"

function OurTeamPage(){
    return(
        <>  
            <PageHeader
            title = "Our Team"
            image = {HeaderImage}
             />

            <div className="TeamPage">
                <section className="PatronAndMentor OurTeam">
                    <h1>Patron and Mentors</h1>
                    <div className="Cards">
                        <TeamsCard
                            img = {PatronImage}
                            name = "Prof. Rajeev Ahuja"
                            designation = "Director, IIT Ropar"
                            email = "2021meb1322@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {MentorImage1}
                            name = "Dr. Pushpendra P. Singh"
                            designation = "Associate Professor, IIT Ropar"
                            email = "2021csb1137@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {MentorImage2}
                            name = "Prof. Harpreet Singh"
                            designation = "Professor, IIT Ropar"
                            email = "2021eeb1204@iitrpr.ac.in"
                        />
                 
                    </div>
                </section>
                <section className="GoverningBody OurTeam">
                    <h1>Governing Body</h1>
                    <div className="Cards">
                        <TeamsCard
                            img = {PresidentImage}
                            name = "Shivam"
                            designation = "President"
                            email = "2021meb1322@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {VicePresidentImage}
                            name = "Yashaswini Vajja"
                            designation = "Vice President"
                            email = "2021csb1137@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {VicePresidentImage2}
                            name = "Reetika"
                            designation = "Vice President SI"
                            email = "2021eeb1204@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {SecretaryImage}
                            name = "Nehal Sonkar"
                            designation = "Secretary"
                            email = "2021meb1304@iitrpr.ac.in"
                        />
                      
                          <TeamsCard
                            img = {TreasurerImage}
                            name = "Aditya Mote"
                            designation = "Treasurer"
                            email = "2021meb1298@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {MemberImage1}
                            name = "Navrinder Singh Dhaliwal"
                            designation = "Member"
                            email = "2021meb1302@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {MemberImage2}
                            name = "Pranav Menon"
                            designation = "Member"
                            email = "2022meb1329@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {MemberImage3}
                            name = "Palla Ramprasad"
                            designation = "Member"
                            email = "palla.21bmz0007@iitrpr.ac.in"
                        />
                     
                             <TeamsCard
                            img = {MemberImage4}
                            name = "Ajay Kumar"
                            designation = "Member"
                            email = "2022mcb1254@iitrpr.ac.in"
                        />
                             <TeamsCard
                            img = {MemberImage5}
                            name = "Pawan Kumar"
                            designation = "Member"
                            email = "pawan.21phz0005@iitrpr.ac.in"
                        />
                                <TeamsCard
                            img = {MemberImage6}
                            name = "Priyanshu Singh"
                            designation = "Member"
                            email = "2022meb1332@iitrpr.ac.in"
                        />
                                <TeamsCard
                            img = {MemberImage7}
                            name = "Kumar Mangalam"
                            designation = "Member"
                            email = "2022aim1002@iitrpr.ac.in"
                        />
                    </div>
                </section>
                <section className="Web-developer OurTeam">
                    <h1>Web Developers</h1>
                    <div className="Cards">
                        <TeamsCard
                            img = {profilepic}
                            name = "Mr. Catinson"
                            designation = "President"
                            email = "sample@email.com"
                        />
                        <TeamsCard
                            img = {profilepic}
                            name = "Mr. Catinson"
                            designation = "President"
                            email = "sample@email.com"
                        />
                        <TeamsCard
                            img = {profilepic}
                            name = "Mr. Catinson"
                            designation = "President"
                            email = "sample@email.com"
                        />
                    </div>
                </section>
                <Link className='LinkForPastTeams' to="/pastteams">
                    <button type="button" className="PastTeamsButton"><b>Past Teams</b> &#10148;</button>
                </Link>
            </div>
        </>
    )
}

export default OurTeamPage