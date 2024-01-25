import "../styles/pagesStyles/AchievementPage.css"
import PageHeader from '../components/PageHeader';
import HeaderImage from "../assets/achivement.jpeg"

function AchievementPage(){
    return(
        <>
            <PageHeader
            title = "Achievements"
            image = {HeaderImage}
            />
            <div className="Carousel">
                <h4> Set of newspaper cuttings</h4>
            </div>
            <div class="Bodysection">
                <table  border="3"  width="70%" >
		        <thead>
			        <tr bgcolor="yellow" align="left"  family="Montserrat Classic">
				        <th> Newspaper   </th>
				        <th> Headline </th>
                        <th> Date </th>
			        </tr>
		        </thead>
		        <tbody>
			        <tr >
				        <td  > Time of India </td>
				        <td> NGO pes </td>
                        <td> jan 15th 2024</td>
			        </tr>
                    <tr >
				        <td  > Time of India </td>
				        <td> NGO pes </td>
                        <td> jan 15th 2024</td>
			        </tr>
                    <tr >
				        <td  > Time of India </td>
				        <td> NGO pes </td>
                        <td> jan 15th 2024</td>
			        </tr>
                    <tr >
				        <td  > Time of India </td>
				        <td> NGO pes </td>
                        <td> jan 15th 2024</td>
			        </tr>
		        </tbody>
	        </table>
            </div>
        </>
    )
}

export default AchievementPage