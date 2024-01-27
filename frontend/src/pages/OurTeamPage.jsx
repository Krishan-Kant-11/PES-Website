import { Link } from 'react-router-dom';
import "../styles/pagesStyles/OurTeamPage.css"
import TeamsCard from "../components/TeamsCard"
import profilepic from "../assets/governingbody/president.png"
import directorPic from "../assets/patronAndMentor/rajeev_sir.jpeg"
import pps_sir from "../assets/patronAndMentor/pps_sir.jpeg"
import harpreet_sir from "../assets/patronAndMentor/harpreet_sir.jpg"
import webdev_1 from "../assets/webdevelopers/webdev_1.jpg"
import webdev_2 from "../assets/webdevelopers/webdev_2.jpg"
import webdev_3 from "../assets/webdevelopers/webdev_3.jpg"
import webdev_4 from "../assets/webdevelopers/webdev_4.jpg"
import webdev_5 from "../assets/webdevelopers/webdev_5.jpg"
import webdev_6 from "../assets/webdevelopers/webdev_6.jpg"
import webdev_7 from "../assets/webdevelopers/webdev_7.jpg"
import PageHeader from '../components/PageHeader';
import HeaderImage from "../assets/header-testing.jpg"

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
                            img = {directorPic}
                            name = "Prof. Rajeev Ahuja"
                            designation = "Director, IIT Ropar"
                            email = "2021meb1322@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {pps_sir}
                            name = "Dr. Pushpendra P. Singh"
                            designation = "Associate Professor, IIT Ropar"
                            email = "2021csb1137@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {harpreet_sir}
                            name = "Prof. Harpreet Singh"
                            designation = "Professor, IIT Ropar"
                            email = "2021eeb1204@iitrpr.ac.in"
                        />
                 
                    </div>
                </section>
                {/* <section className="GoverningBody OurTeam">
                    <h1>Governing Body</h1>
                    <div className="Cards">
                        <TeamsCard
                            img = {profilepic}
                            name = "Shivam"
                            designation = "President"
                            email = "2021meb1322@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {profilepic}
                            name = "Yashaswini Vajja"
                            designation = "Vice President"
                            email = "2021csb1137@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {profilepic}
                            name = "Reetika"
                            designation = "Vice President SI"
                            email = "2021eeb1204@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {profilepic}
                            name = "Nehal Sonkar"
                            designation = "Secretary"
                            email = "2021meb1304@iitrpr.ac.in"
                        />
                      
                          <TeamsCard
                            img = {profilepic}
                            name = "Aditya Mote"
                            designation = "Treasurer"
                            email = "2021meb1298@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {profilepic}
                            name = "Navrinder Singh Dhaliwal"
                            designation = "Member"
                            email = "2021meb1302@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {profilepic}
                            name = "Pranav Menon"
                            designation = "Member"
                            email = "2022meb1329@iitrpr.ac.in"
                        />
                          <TeamsCard
                            img = {profilepic}
                            name = "Palla Ramprasad"
                            designation = "Member"
                            email = "palla.21bmz0007@iitrpr.ac.in"
                        />
                     
                             <TeamsCard
                            img = {profilepic}
                            name = "Ajay Kumar"
                            designation = "Member"
                            email = "2022mcb1254@iitrpr.ac.in"
                        />
                             <TeamsCard
                            img = {profilepic}
                            name = "Pawan Kumar"
                            designation = "Member"
                            email = "pawan.21phz0005@iitrpr.ac.in"
                        />
                                <TeamsCard
                            img = {profilepic}
                            name = "Priyanshu Singh"
                            designation = "Member"
                            email = "2022meb1332@iitrpr.ac.in"
                        />
                                <TeamsCard
                            img = {profilepic}
                            name = "Kumar Mangalam"
                            designation = "Member"
                            email = "2022aim1002@iitrpr.ac.in"
                        />
                    </div>
                </section> */}
                <section className="Web-developer OurTeam">
                    <h1>Web Developers</h1>
                    <div className="Cards">
                        <TeamsCard
                            img = {webdev_1}
                            name = "Krishan Kant"
                            designation = "Front-end Lead"
                            email = "2021meb1293@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_2}
                            name = "Meriga.Sai Lahari "
                            designation = "Back-end Lead"
                            email = "2023eem1006@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_3}
                            name = "Upasna"
                            designation = "Back-end Team"
                            email = "2019csm1015@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_4}
                            name = "Harshit Kumar"
                            designation = "Back-end Team"
                            email = "2021csb1093@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_5}
                            name = "Gopi Varshini"
                            designation = "Front-end Team"
                            email = "2022mcb1264@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_6}
                            name = "Jay Goel"
                            designation = "Front-end Team"
                            email = "2022eeb1178@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {webdev_7}
                            name = "Nalin Angrish"
                            designation = "Back-end Team"
                            email = "2023meb1360@iitrpr.ac.in"
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