import "../styles/pagesStyles/PastTeams.css"
import PastTeamsCard from "../components/PastTeamsCard";

function PastTeams(){
    return(
        <>
            <div className="PastTeams">
                <h1>Past Teams</h1>
                <div className="PastTeamsCards">
                    <PastTeamsCard 
                        year = "2022-2023"
                        link = "https://www.iitrpr.ac.in/pehchaanes/images/governing_body_2022_23/Governing_body_2022-2023.pdf"

                    />
                    <PastTeamsCard 
                        year = "2021-2022"
                        link = "https://www.iitrpr.ac.in/pehchaanes/images/governing_body_2021_22/Governing_Body_2021-22.pdf"
                        
                    />
                    <PastTeamsCard 
                        year = "2020-2021"
                        link = "https://www.iitrpr.ac.in/pehchaanes/images/General_Body_2020-21.pdf"
                        
                    />
                    <PastTeamsCard 
                        year = "2018-2020"
                        link = "https://www.iitrpr.ac.in/pehchaanes/images/PES_Governing_Bodies.pdf"
                        
                    />
                </div>
            </div>
        </>
    )
}

export default PastTeams;