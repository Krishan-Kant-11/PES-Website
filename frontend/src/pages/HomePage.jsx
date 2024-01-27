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
import Hero_5 from "../assets/home_hero_sss.jpg";
import Hero_2 from "../assets/home_hero_paathshala.png";
import Hero_3 from "../assets/home_hero_outreach.jpg";
import Hero_4 from "../assets/home_hero_atl.jpg";
import Hero_1 from "../assets/home_hero_director.png";

{
  /* Images for testimonial */
}
import testimonial_1 from "../assets/home_testimonials/photo.png";
import testimonial_2 from "../assets/home_testimonials/photo.png";
import testimonial_3 from "../assets/home_testimonials/photo.png";
import testimonial_4 from "../assets/home_testimonials/photo.png";
import testimonial_5 from "../assets/home_testimonials/harpreet sir.jpg";

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
    img: Hero_1,
    heading: "Education",
    subheading: "4 underpriviledged",
    description: "Shaping Identities, Redefining Education: Pehchaan empowers young minds, nurturing their potential to build a brighter tomorrow. We strive to redefine education, fostering personal growth and creating a positive impact on the identities of the individuals we serve. "
    },
  {
    img: Hero_2,
    heading: "Education",
    subheading: "4 underpriviledged",
    description: "Paathshala provides daily tuition classes for economically challenged children. We also support their admission into esteemed institutions such as KV, JNV and Navodaya, ensuring access to quality education. Our mission is to empower every child and breaking barriers for a brighter future."    },
  {
    img: Hero_3,
    heading: "Mentorship",
    subheading: "Sparking Curiosity",
    description: "Outreach: Fostering scientific temper and financial literacy in Ropar's students through career counseling sessions, seminars, and workshops. We engage with both private and government schools, empowering students for a knowledge-rich and financially informed future." },
  {
    img: Hero_4,
    heading: "Raising",
    subheading: "The Bar",
    description:"Atal Tinkering Labs: Extending beyond classrooms, we empower through ATLs, training teachers and fostering innovation. Our commitment is to cultivate a culture of creativity, preparing students for a dynamic future." },
  {
    img: Hero_5,
    heading: "School Safar",
    subheading: "Saathi  (SSS) ",
    description:"Empowering meritorious students in financial adversity through resources and mentorship. We conduct fair tests and interviews to ensure a transparent selection process, nurturing their academic journey and future success."},
];

// Data for Testimonial section
const testimonialData = [
  {
    name: "Sanyukta Marandi",
    description:
    "(Volunteer) I had always wanted to be a part of something that strived towards making this world a better place, and Pehchaan provided me just that. Everyday we get to learn from the kids as much as they learn from us. Also, we not only help the children with their education, but also try to guide them in any way possible. The team, the children, the mentors and guides, we are all a family now. It doesn't feel like we are working for anyone else, It's like we are working for ourselves. In this journey of spreading love and education we have come a long way, and I believe we've still got a long journey to cover."
    ,img: testimonial_1,
  },
  {
    name: "Versha Chaudhary",
    description:
      "(Founding Member) Pehchaan ek safar is an effort to help and uplift the needy, which eventually contributes to the Nation building. Every time I visited those kids I used to receive their long smiles and inner mental peace as a regular reward. This has been a continuous source of motivation for me and hence I was able to connect with new creative paths to help those kids. That amazing experience of those incredible smiles and self satisfaction beats in my heart even today. I feel lucky and proud of myself and my team to be able to initiate this noble cause. Initial phase is always a challenging part for every journey ",
    img: testimonial_2,
  },
  {
    name: "Mahantesh Khetri",
    description:
      "(Founding Member) Proud to be a founding member of Pehchaan Ek Safar, an NGO focusing on educating underprivileged children. Our journey began with a few volunteers near IIT Ropar, and now we've expanded to support hundreds of kids, registering them in formal schooling with dedicated volunteers providing crucial assistance and skill training. Our ongoing mission embraces kindness and skilled volunteers to achieve even greater milestones ahead."
       ,img: testimonial_3,
  },
  {
    name: "Atul Singh",
    description:
      "(Founding Member) In late 2017, as founding members wandering IIT Ropar, we discovered local children deprived of education. With support from fellow students and the institute, we formed PEHCHAAN EK SAFAR, an NGO aiming to bridge the gap between privileged and underprivileged, fostering identity and citizenship pride. Personally fulfilling, our work promotes light over darkness. The NGO rapidly expands, focusing on education and instilling scientific temper in youth. Best wishes to the Pehchaan family for ongoing contributions to a better tomorrow.",
      img: testimonial_4,
  },
  {
    name: "Prof Harpreet Singh",
    description:
      "(Mentor) As a mentor of Pehchaan Ek Safar,I feel privileged to witness volunteers dedicating time and resources to educate underprivileged children alongside their studies. Its heartening to see them not only teach but also incorporate the latest learning methods. Education is key for financial sustainability and fostering good citizenship. Congratulations to the volunteers for shaping the future of these children, guiding them out of the darkness of illiteracy. You are the real heroes, setting a beautiful example of service to humanity. Thank you for your inspiring work. Live Long, Pehchaan Ek Safar! "
      ,img: testimonial_5,
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
            Pehchaan Ek Safar, a non-profit organization initiated and managed by students of IIT Ropar, stands dedicated to eradicating illiteracy and championing the Right to Education for children from socio-economically disadvantaged backgrounds. In a landscape where access to education is a privilege and quality education remains elusive for underprivileged children, we recognize the urgency to counteract the widening societal gap exacerbated by the commodification of education. Pehchaan Ek Safar strives to fill this void by offering free, quality education in a nurturing environment. Through a mission of empowerment, we aim to equip these children with the tools and knowledge necessary to create a better, brighter, and happier future for themselves, ensuring they are not at a disadvantage compared to their more privileged counterparts.

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
            details="Here at Paathshala we reach out to the underprivileged students, aiming to aid them in their education. Paathshala regularly provides free quality tuitions to the students, arrange sports and extracurricular activities for their all-round development, raising awareness among the parents on education and much more."
            link="/paathshala"
          />
          <WeDoCard
            img={homepage_outreach_2}
            title="OUTREACH"
            details="Expanding our circle, outreach program sends volunteers outside Paathshala for conducting sessions in schools in Ropar district. Through our outreach team, we conduct career counselling sessions, health related talks, science and technology information sessions and more."
            link="/outreach"
          />
          <WeDoCard
            img={homepage_others_2}
            title="EVENTS"
            details="Apart from the outreach program, we also organize events for the students. We schedule events for important days of the year, celebrate festivals, organize competitions and other activities to boost enthusiasm."
             link="/otherevents"
          />
        </div>
      </section>

      <DonateCompo />

      <section className="achievements">
        <h1>ACHIEVEMENTS</h1>
        <div className="achievements-content">
          <div className="achievement-text">
            <h2>
              We love to help all the children that have problems in the world.
              After 6 years we have many goals achieved.
            </h2>
            <div className="achievement-underline"></div>
            <p>
            We don't just see potential, we nuture it. We don't just build futures, we weave them together. This is Pehchaan Ek Safa transforming lives, hand in hand, weaving a brighter tomorrow, for everyone.

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
        <h1>TESTIMONIAL</h1>
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
