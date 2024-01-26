import { Link } from 'react-router-dom';
import "../styles/pagesStyles/OurTeamPage.css"
import TeamsCard from "../components/TeamsCard"
import profilepic from "../assets/governingbody/president.png"
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