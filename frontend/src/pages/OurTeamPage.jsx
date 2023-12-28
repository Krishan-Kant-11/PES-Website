import { Link } from 'react-router-dom';
import "../styles/pagesStyles/OurTeamPage.css"
import TeamsCard from "../components/TeamsCard"
import profilepic from "../assets/sample-image.jpg"

function OurTeamPage(){
    return(
        <>
            <div className="TeamPage">
                <section className="PatronAndMentor OurTeam">
                    <h1>Patron and Mentors</h1>
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