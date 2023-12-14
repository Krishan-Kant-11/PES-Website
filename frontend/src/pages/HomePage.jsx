import "../styles/pagesStyles/HomePage.css"
import StickyJoinButton from "../components/StickyJoinButton";
import StickyDonateButton from "../components/StickyDonateButton";
import homepage_about_1 from "../assets/home-page-about-1.jpg"
import homepage_about_2 from "../assets/home-page-about-2.jpg"
import homepage_pathshala from "../assets/home-page-our-work-pathshala.jpg"
import homepage_outreach from "../assets/home-page-our-work-outreach.jpg"
import homepage_others from "../assets/home-page-our-work-others.jpg"

function HomePage(){
    return(
        <>
        <div className="HomePage">
            <section className="AboutUs">
                <h1>WHO WE ARE</h1>
                <div className="AboutUs-Content">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus non rerum quis hic eaque eum velit illum necessitatibus cumque! Harum temporibus voluptatum ut sint omnis quidem tenetur possimus perferendis laudantium nisi, animi quos quae, inventore ipsa laborum iusto a officia ipsam cumque, eligendi commodi. Assumenda nemo nesciunt rerum consequatur consectetur quaerat voluptatibus corrupti exercitationem beatae molestiae, amet atque molestias eius qui possimus? Molestiae ea optio culpa neque quam et necessitatibus tempora dolorum id? Aliquid quia, debitis alias animi est asperiores. Harum blanditiis facere deleniti, magni voluptatibus optio iusto nihil aut asperiores earum consequuntur cupiditate non voluptatem voluptate dicta veniam ab provident doloribus tempore. Officia perferendis rem suscipit dolore illo natus quam minima nemo! Odio sint accusamus obcaecati corrupti soluta, neque eaque possimus impedit reiciendis quidem nisi illo. Quasi, vel fugiat aut sed quo distinctio ipsam sequi necessitatibus voluptatem, culpa incidunt natus. Hic quis ex accusantium ratione enim culpa illo, quibusdam officiis eius architecto magnam voluptas rem deserunt veniam voluptatem ab corrupti. Voluptatum dolorem quas magnam aliquid exercitationem eveniet adipisci veniam non quibusdam maiores! Eum quidem iusto obcaecati quibusdam ad quae. Id, sit impedit. Deserunt esse voluptatum dolorem eaque tenetur mollitia veritatis eos, veniam enim nobis necessitatibus, eveniet provident aspernatur!</p>
                    <div className="Carousels">
                        <img src={homepage_about_1}></img>
                        <img src={homepage_about_2}></img>
                        <img src={homepage_about_1}></img>
                        <img src={homepage_about_2}></img>
                    </div>
                </div>
            </section>

            <section className="OurWork">
                <h1>WHAT WE DO</h1>
                <div className="OurWork-Content">
                    <section className="OurWork-Pathshala">
                        <img src={homepage_pathshala}></img>
                        <img src={homepage_pathshala}></img>
                        <img src={homepage_pathshala}></img>
                        <img src={homepage_pathshala}></img>
                    </section>
                    <section className="OurWork-Outreach">
                        <img src={homepage_outreach}></img>
                        <img src={homepage_outreach}></img>
                        <img src={homepage_outreach}></img>
                        <img src={homepage_outreach}></img>
                    </section>
                    <section className="OurWork-Others">
                        <img src={homepage_others}></img>
                        <img src={homepage_others}></img>
                        <img src={homepage_others}></img>
                        <img src={homepage_others}></img>
                    </section>
                </div>
            </section>

            <section className="Achievements">
                <h1>OUR ACHIEVEMENTS</h1>
            </section>

            <section className="Testimonials">
                <h1>TESTIMONIALS</h1>
            </section>

            <section className="JoinUs">
                <h1>BE PART OF THE TEAM</h1>
            </section>


            <StickyJoinButton />
            <StickyDonateButton />
        </div>
        </>
    )
}

export default HomePage;