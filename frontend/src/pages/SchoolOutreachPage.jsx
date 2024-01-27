import "../styles/pagesStyles/SchoolOutreachPage.css";
import PageHeader from "../components/PageHeader";
import HeaderImage from "../assets/header-testing.jpg";
import outreachImage from "../assets/donation-msg.jpg";

function SchoolOutreachPage() {
  return (
    <>
      <div className="outreach-container">
        <PageHeader title="School Outreach" image={HeaderImage} />
        <div className="outreach-content">
          <img src={outreachImage}></img>
          <p>
          One of the key motivations for Pehchaan Ek Safar is to install the scientific temperament in the children. As a result, Pehchaan Ek Safar’s Outreach Project also conducts workshops and seminars in different schools all around Ropar. The Outreach Project has provided wonderful opportunities for the staff and students of IIT Ropar to share their wisdom and experience with the school children. 
          In close association with the Government and private schools of Ropar, the Outreach Team has conducted several workshops and seminars ranging from topics like Medicine and Biology, The Working of Internet to Career Guidance for High School Students. Our team also regularly invites distinguished speakers from various backgrounds to have interactive and educative sessions with the students of IIT Ropar.
          </p>
        </div>
      </div>
    </>
  );
}

export default SchoolOutreachPage;
