import Navbar from "../components/Navbar"
import StickyJoinButton from "../components/StickyJoinButton";
import StickyDonateButton from "../components/StickyDonateButton";
import "../styles/pagesStyles/HomePage.css"
import homepage_about from "../assets/Homepage_About.jpg"

function HomePage(){
    return(
        <>
        <div className="HomePage">
            <section className="AboutUs">
                <h1>WHO WE ARE</h1>
                <div className="AboutUs-Content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dignissimos consequuntur voluptatum quam odio ad asperiores amet commodi impedit totam vel rem alias, quod iure quo? Commodi adipisci asperiores neque sapiente totam quidem consequatur mollitia maxime incidunt animi tempora autem assumenda odio unde quos voluptatum repellat dicta architecto minus beatae labore nesciunt qui, molestiae error? Voluptatem, odit! Nam ipsa fugiat laboriosam ipsum consequatur debitis itaque voluptas, vero distinctio eaque suscipit praesentium quam sapiente voluptatem excepturi rem labore doloremque! Maiores veniam est nam explicabo nihil. Aspernatur voluptatem laborum soluta voluptates eius, velit modi vitae laboriosam facere veritatis, fugiat corrupti nostrum! Maxime!</p>
                    <img src={homepage_about}></img>
                </div>
            </section>
            <StickyJoinButton />
            <StickyDonateButton />
        </div>
        </>
    )
}

export default HomePage;