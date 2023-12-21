import StickyJoinButton from "../components/StickyJoinButton";
import StickyDonateButton from "../components/StickyDonateButton";
import "../styles/pagesStyles/HomePage.css"
import FooterPES from "../components/Footer";


import Hero from "../components/Hero";

import hero_image1 from "../assets/hero_image1.jpg";
import hero_image2 from "../assets/hero_image2.jpg";
import hero_image3 from "../assets/hero_image3.jpg";
import hero_image4 from "../assets/hero_image4.jpg";
import Navbar from "../components/Navbar";

const heroSliderImages = [
    hero_image1, hero_image2, hero_image3, hero_image4
]; 

import Testimonial from "../components/Testimonial";

function HomePage(){
    return(
        <>
            <Navbar />
            <Hero 
                heroClassName="hero"
                heroSliderImages={heroSliderImages}
                heroHeading="Education for underpriviledged"
                heroParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."    
            />
            <Testimonial />
            <h1>this is home page for PES website</h1>
            <p>This is the paragraph on home page</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repellendus quo eius earum accusamus tenetur aspernatur laudantium? Impedit, laborum voluptatum quae velit nesciunt mollitia labore, veritatis officia earum sit nostrum!</p>
            <StickyJoinButton />
            <StickyDonateButton />
            <FooterPES />
        </>
    )
}

export default HomePage;