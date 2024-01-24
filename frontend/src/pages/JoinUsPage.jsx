import "../styles/pagesStyles/JoinUsPage.css";
import JoinForm from "../components/JoinForm";
import PageHeader from "../components/PageHeader";
import HeaderImage from "../assets/joinuspage.jpg";

export default function JoinUsPage() {
  return (
    <div>
      <PageHeader title="Join Us" image={HeaderImage} />

      {/* <div class="quote">
        <b>Together, we can help the world rise.</b>{" "}
      </div>

      <div class="subquote">
        {" "}
        Most problems we deal with are too complex to be solved by one person.
        It takes passion to accelerate progress. It takes commitment to create
        change. But, it takes our collective efforts to transform lives and
        communities.
      </div> */}

      <div className="join-instructions">
        <h1>Become a Part of Pehchaan Ek Safar</h1>
        <p>
          <span>1.</span> This form is only for the students currently studying at IIT Ropar.
          <br />
          <span>2.</span> We will reach out to you when we would be onboarding new
          volunteers. <br />
          <span>3.</span> Make sure you are filling this form with institute email only.
          <br />
          <span>4.</span> If you are not currently studying at IIT Ropar, we welcome you to
          support our initiative. Contact Info:
          <span> https://iitrpr.ac.in/pehchaanes/contact</span>
        </p>
      </div>

      <div class="joinus-container">
        <JoinForm />
      </div>
    </div>
  );
}
