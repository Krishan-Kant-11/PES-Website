import "../styles/pagesStyles/HomePage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

{
  /* Importing different components to be used on homepage*/
}
import StickyJoinButton from "../components/StickyJoinButton";
import StickyDonateButton from "../components/StickyDonateButton";
import WeDoCard from "../components/WhatWeDoCard";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Testimonial2 from "../components/Testimonial2";

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

{
  /* Array of images for the hero section */
}
const heroSliderImages = [hero_image1, hero_image2, hero_image3, hero_image4];

{
  /* Arrray for Testimonial section*/
}
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
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <Hero
        heroClassName="hero"
        heroSliderImages={heroSliderImages}
        heroHeading="Education for underpriviledged"
        heroParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      {/* <h1>This is Home page</h1>
      <h1>This is Home page</h1> */}

      <section className="AboutUs">
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

      <section className="Testimonials">
        <h1>Testimonials</h1>
      </section>

      <div className="testing">
        <Slider {...settings} className="Testimonial-cards">
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
