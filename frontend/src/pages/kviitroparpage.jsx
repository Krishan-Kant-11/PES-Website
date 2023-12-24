import "../styles/pagesStyles/kviitroparpage.css"

function Carousel()
{
    return(
        <div className="Carousel">
         <h4> Set of images</h4>

        </div>
    )
}
function MainContent_1()
{
    return(
        <div className="KVIIT_Ropar">
        <div className= "KV_School"  >
        <h1 className="OutHeading1">KV IIT Ropar</h1>
       </div>
        <p className="KVIIT_Admission">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae auctor eu. Vitae suscipit tellus mauris a diam maecenas sed enim. Enim sit amet venenatis urna cursus eget nunc scelerisque. Mauris cursus mattis molestie a iaculis. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Mauris vitae ultricies leo integer. Commodo odio aenean sed adipiscing diam. Pulvinar elementum integer enim neque. Morbi tincidunt augue interdum velit euismod in. Turpis egestas sed tempus urna.
        Sit amet aliquam id diam maecenas ultricies. Posuere morbi leo urna molestie at elementum. Tincidunt dui ut ornare lectus sit amet est. Risus feugiat in ante metus dictum. Nisi vitae suscipit tellus mauris a diam. Massa id neque aliquam vestibulum morbi blandit cursus. Venenatis urna cursus eget nunc scelerisque viverra. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Eu lobortis elementum nibh tellus molestie nunc non. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Urna nec tincidunt praesent semper feugiat. Enim sed faucibus turpis in eu mi bibendum neque egestas.
        </p>
        </div>


    )
}




function Kviitroparpage(){
    return(
        <>
        <Navbar />
        <Carousel />
        <MainContent_1/>
        </>

    )
}

export default Kviitroparpage
