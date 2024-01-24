import "../styles/pagesStyles/ContactPage.css";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import ContactusImage from "../assets/contactus.jpg";

function ContactPage() {
  return (
    <div class="Contact-main">
      <PageHeader title="" image={ContactusImage} />
      <div class="cform">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
