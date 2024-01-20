import "../styles/pagesStyles/ContactPage.css";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import ContactusImage from "../assets/contactus.jpg";

function ContactPage() {
  return (
    <div class="main">
      <PageHeader title="" image={ContactusImage} />
      {/* <div class="text1s">
        <div class="quote1">
          <b>
            "The best way to find yourself is to lose yourself in the service of
            others"{" "}
          </b>
        </div>
        <div class="quote2"> ~ BY Mahatma Gandhi</div>
      </div> */}
      <div class="form">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
