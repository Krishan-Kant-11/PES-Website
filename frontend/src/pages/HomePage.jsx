import "../styles/pagesStyles/HomePage.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

{
  /* Importing different components to be used on homepage*/
}
import StickyJoinButton from "../components/StickyJoinButton";
import StickyDonateButton from "../components/StickyDonateButton";
import WeDoCard from "../components/WhatWeDoCard";
import Hero from "../components/Hero";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";
import Testimonial2 from "../components/Testimonial2";
import DonateCompo from "../components/DonateCompo";

{
  /* Images for homepage*/
}
import homepage_about_1 from "../assets/home-page-about-1.jpg";
import homepage_about_2 from "../assets/home-page-about-2.jpg";
import homepage_pathshala from "../assets/home-page-our-work-pathshala.jpg";
import homepage_pathshala_2 from "../assets/home-page-our-work-pathshala-2.jpg";
import homepage_outreach from "../assets/home-page-our-work-outreach.jpg";
import homepage_outreach_2 from "../assets/home-page-our-work-outreach-2.jpg";
import homepage_others from "../assets/home-page-our-work-others.jpg";
import homepage_others_2 from "../assets/home-page-our-work-others-2.jpg";
import about_1 from "../assets/about-1.jpg";
import about_2 from "../assets/about-2.jpg";
import about_3 from "../assets/about-3.jpg";
import HeaderImage from "../assets/header-testing.jpg";

{
  /* Images for testimonial */
}
import testimonial_1 from "../assets/testimonial-1.jpg";
import testimonial_2 from "../assets/testimonial-2.jpg";

{
  /* Images for Hero section*/
}
import hero_image1 from "../assets/hero_image1.jpg";
import hero_image2 from "../assets/hero_image2.jpg";
import hero_image3 from "../assets/hero_image3.jpg";
import hero_image4 from "../assets/hero_image4.jpg";

// Importing SVGs for Achievement section
import holdingHand from "../assets/holding-hand.svg";
import volunteerIcon from "../assets/dove-solid.svg";
import personIcon from "../assets/person-solid.svg";

{
  /* Array of images for the hero section */
}
const heroSliderImages = [hero_image1, hero_image2, hero_image3, hero_image4];

// Data for Hero section
const heroData = [
  {
    img: HeaderImage,
    heading: "Education",
    subheading: "4 underpriviledged",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id.",
  },
  {
    img: HeaderImage,
    heading: "Education",
    subheading: "4 underpriviledged",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id.",
  },
  {
    img: HeaderImage,
    heading: "Education",
    subheading: "4 underpriviledged",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id.",
  },
];

// Data for Testimonial section
const testimonialData = [
  {
    name: "Mrs Mohini",
    description:
      "I had always wanted to be a part of something that strived towards making this world a better place, and Pehchaan provided me just that. Everyday we get to learn from the kids as much as they learn from us. Also, we not only help the children with their education, but also try to guide them in any way possible. The team, the children, the mentors and guides, we are all a family now. It doesn't feel like we are working for anyone else, It's like we are working for ourselves. In this journey of spreading love and education we have come a long way, and I believe we've still got a long journey to cover.",
    img: testimonial_1,
  },
  {
    name: "Prof Sarojni",
    description:
      "Pehchaan ek safar is an effort to help and uplift the needy, which eventually contributes to the Nation building. Every time I visited those kids I used to receive their long smiles and inner mental peace as a regular reward. This has been a continuous source of motivation for me and hence I was able to connect with new creative paths to help those kids. That amazing experience of those incredible smiles and self satisfaction beats in my heart even today. I feel lucky and proud of myself and my team to be able to initiate this noble cause. Initial phase is always a challenging part for every journey ",
    img: testimonial_2,
  },
];

function HomePage() {
  const settingsTestimonial = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const settingsHero = {
    customPaging: function (i) {
      return <div className="dot">{i + 1}</div>;
    },
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
  };

  return (
    <>
      <section className="hero">
        <Slider {...settingsHero}>
          {heroData.map((item, index) => (
            <div key={index}>
              <HeroSection {...item} />
            </div>
          ))}
        </Slider>
      </section>

      <section className="AboutUs" id="about-us">
        <h1>ABOUT US</h1>
        <div className="AboutUs-content">
          <div className="AboutUs-p">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              totam eligendi sequi quia, ipsam excepturi laudantium nesciunt
              vero id eaque nemo impedit commodi amet cupiditate voluptatum,
              fuga perspiciatis fugiat error? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus iure velit sed quas ipsum
              sit soluta laudantium fugiat accusantium repellendus, minima nulla
              ab ad eaque voluptates sint magni impedit vel molestias similique
              placeat adipisci pariatur asperiores! At perferendis tenetur in
              sapiente optio quaerat debitis neque deleniti cupiditate saepe
              numquam totam quae ullam fugiat, quia quod odio, quo provident,
              dignissimos facere et possimus! Nulla, quas. Reiciendis deserunt
              omnis quibusdam animi ratione iste laborum sed adipisci nam
              voluptas fuga maiores illo aut, odit ullam temporibus, ipsum ad
              quasi? Error ex, enim vel commodi incidunt quas, beatae adipisci
              dignissimos tempore eaque ab voluptas!
            </p>
          </div>

          <div>
            <img src={homepage_pathshala} className="AboutUs-img"></img>
          </div>

          <div className="about-img">
            <div className="about-img-c1">
              <img src={about_1} className="about-img-1"></img>
            </div>
            <div className="about-img-c2">
              <div>
                <img src={about_2} className="about-img-2"></img>
              </div>
              <div>
                <img src={about_3} className="about-img-3"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="OurWork">
        <h1>WHAT WE DO</h1>
        <div className="OurWork-Content">
          {/* Make sure the image are in 3:4 ratio */}
          <WeDoCard
            img={homepage_pathshala_2}
            title="PAATHSHALA"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet nemo odio quos accusamus aliquid omnis, quam numquam temporibus, molestiae quasi sed mollitia, voluptas nesciunt sequi obcaecati soluta facere dolorem."
            link="/paathshala"
          />
          <WeDoCard
            img={homepage_outreach_2}
            title="OUTREACH"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet nemo odio quos accusamus aliquid omnis, quam numquam temporibus, molestiae quasi sed mollitia, voluptas nesciunt sequi obcaecati soluta facere dolorem."
            link="/outreach"
          />
          <WeDoCard
            img={homepage_others_2}
            title="EVENTS"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae amet nemo odio quos accusamus aliquid omnis, quam numquam temporibus, molestiae quasi sed mollitia, voluptas nesciunt sequi obcaecati soluta facere dolorem."
            link="/otherevents"
          />
        </div>
      </section>

      <DonateCompo />

      <section className="achievements">
        <h1>ACHIEVE</h1>
        <div className="achievements-content">
          <div className="achievement-text">
            <h2>
              We love to help all the children that have problems in the world.
              After 6 years we have many goals achieved.
            </h2>
            <div className="achievement-underline"></div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam aperiam dolorem fugit ipsam est neque debitis. Fuga
              nemo, tempora vitae maiores deleniti natus obcaecati beatae
              officiis earum perferendis, pariatur aliquid.
            </p>
          </div>
          <div className="achievement-stats">
            <div className="achievement-icons">
              <div className="lives-affected">
                <img src={personIcon} className="lives-affected-icon"></img>
                <h3>3K+</h3>
                <p>Lives affected</p>
              </div>
              <div className="volunteer">
                <img src={volunteerIcon} className="volunteer-icon"></img>
                <h3>950</h3>
                <p>volunteeres so far</p>
              </div>
              <div className="children-helped">
                <img src={holdingHand} className="children-helped-icon"></img>
                <h3>1K+</h3>
                <p>Children helped</p>
              </div>
            </div>
            <Link className="achievement-rdm-btn" to="/achievement">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h1>MONIAL</h1>
      </section>

      {/* Due to some bug the testimonial-carousel is not inside testimonial section and its has been keep seprate */}
      <div className="testimonial-carousel">
        <Slider {...settingsTestimonial} className="Testimonial-cards">
          {testimonialData.map((item, index) => (
            <div key={index}>
              <Testimonial2 {...item} />
            </div>
          ))}
        </Slider>
      </div>

      

      <StickyJoinButton />
      <StickyDonateButton />
    </>
  );
}

export default HomePage;
