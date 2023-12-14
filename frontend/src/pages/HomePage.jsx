import StickyJoinButton from "../components/StickyJoinButton";
import StickyDonateButton from "../components/StickyDonateButton";
import "../styles/pagesStyles/HomePage.css"

function HomePage(){
    return(
        <>
            <h1>this is home page for PES website</h1>
            <p>This is the paragraph on home page</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus quo eius earum accusamus tenetur aspernatur laudantium? Impedit, laborum voluptatum quae velit nesciunt mollitia labore, veritatis officia earum sit nostrum!</p>
            <StickyJoinButton />
            <StickyDonateButton />
        </>
    )
}

export default HomePage;