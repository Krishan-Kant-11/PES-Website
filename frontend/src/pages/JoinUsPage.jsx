import "../styles/pagesStyles/JoinUsPage.css";
import JoinForm from "../components/JoinForm";
import PageHeader from "../components/PageHeader";
import HeaderImage from "../assets/joinuspage.jpg";

export default function JoinUsPage() {
  return (
    <div>
      
      <PageHeader title="Join Us" image={HeaderImage} />

      <div class="quote">
        <b>Together, we can help the world rise.</b>{" "}
      </div>

      <div class="subquote">
        {" "}
        Most problems we deal with are too complex to be solved by one person.
        It takes passion to accelerate progress. It takes commitment to create
        change. But, it takes our collective efforts to transform lives and
        communities.
      </div>

      <div class="joinus-container">
        <JoinForm />
      </div>

    </div>
  );
}
