import { Link } from 'react-router-dom';
import "../styles/pagesStyles/OurTeamPage.css"
import TeamsCard from "../components/TeamsCard"
import profilepic from "../assets/governingbody/president.png"
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
                            img = {profilepic}
                            name = "Shivam"
                            designation = "President"
                            email = "2021meb1322@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {profilepic}
                            name = "Yashaswini Vajja"
                            designation = "Vice-President"
                            email = "2021csb1137@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {profilepic}
                            name = "Reetika"
                            designation = "Vice-President SI"
                            email = "2021eeb1204@iitrpr.ac.in"
                        />
                        <TeamsCard
                            img = {profilepic}
                            name = "Nehal Sonkar"
                            designation = "Secretary"
                            email = "2021meb1304@iitrpr.ac.in"
                        />
                    </div>
                </section>
                <section className="GoverningBody OurTeam">
                    <h1>Governing Body</h1>
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