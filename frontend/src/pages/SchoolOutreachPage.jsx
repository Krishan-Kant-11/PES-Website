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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            ipsa quibusdam tempore sapiente eligendi itaque earum harum?
            Possimus ullam totam consectetur provident, cum esse rem, atque iste
            libero fugiat suscipit recusandae incidunt nesciunt. Modi nesciunt
            totam et sint inventore saepe voluptates culpa voluptatibus quos
            sequi sed beatae, unde magni sunt eaque? Eius velit iste quod
            voluptatibus nulla autem accusamus delectus impedit! Iste fugiat
            maxime quibusdam distinctio quae sit laboriosam! Ea pariatur quod
            quam ratione totam, tenetur necessitatibus voluptatum facilis libero
            esse reiciendis rem sit ad, impedit earum deleniti quo quos!
            Repellat, aliquid! Maiores tenetur id repellat maxime corrupti
            consequatur repellendus eaque et blanditiis ipsum aliquid at eos
            ullam quis iste asperiores, rem perferendis nisi, error hic
            mollitia. Dolore nemo aliquid laborum consectetur natus, saepe
            beatae accusamus nesciunt. Eos veritatis minima tenetur quo quod
            debitis provident necessitatibus. Debitis, sunt. Corporis voluptates
            temporibus inventore illo aliquid in iure aliquam sed? Voluptas,
            error.
          </p>
        </div>
      </div>
    </>
  );
}

export default SchoolOutreachPage;
