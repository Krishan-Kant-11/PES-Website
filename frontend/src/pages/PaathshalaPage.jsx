import "../styles/pagesStyles/PaathshalaPage.css";
import Carousel from "../components/Carousel";
import PageHeader from "../components/PageHeader";
import HeaderImage from "../assets/paathshala.jpg";
import paathshalaImage from "../assets/donation-msg.jpg";


function PaathshalaPage() {
  return (
    // <div class="main">
    //     <PageHeader
    //     title = "PAATHSHALA"
    //     image = {HeaderImage}
    //     />
    //     <div class="body1">
    //         <div class="body1text">
    //         The Paathshala project is one of the earliest projects started by Pehchaan. The goal of Paathshala is to provide free and quality tuitions to the underprivileged students living in the vicinity of the IIT Ropar campus. This also includes encouraging the parents to enroll their children in schools, providing school transportation to students who live in inaccessible areas and making it a personal mission to watch our students transform into valuable assets for the nation. Apart from their regular school syllabus, we also give equal focus on sports and extracurricular activities to ensure an all-round development.
    //         </div>
    //     </div>

    //    <div class="body2">
    //             <div class="subbutton">   <button class="button" > PAATHSHALA </button>      </div>
    //             <div class="text2">Paathshala is located near the Main Campus of IIT Ropar. There are around 20 students living in that area and we have set up a small hut to serve as the classroom. Since their homes are very far from their schools, sometimes it would get difficult for them to attend their schools regularly. Several successful school enrollment drives are also held regularly to make sure no one, especially a girl child is deprived of their right to education.</div>
    //             <div class="location"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6842.239141164499!2d76.46725466202466!3d30.967145247068164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390554db3ae2b313%3A0x3a30811e74664861!2sSatish%20Dhawan%20Block%2C%20Department%20of%20Mechanical%20Engineering%20-%20IIT%20Ropar!5e0!3m2!1sen!2sin!4v1702300635749!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    //             </div>
    //     </div>
    //     <br/>
    // </div>

    <>
      <div className="paathshala-container">
        <PageHeader title="PAATHSHALA" image={HeaderImage} />
        <div className="paathshala-content">
          <img src={paathshalaImage}></img>
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

export default PaathshalaPage;
