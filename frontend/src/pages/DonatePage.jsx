import Navbar from "../components/Navbar"
import "../styles/pagesStyles/DonatePage.css"
import React, { useState } from 'react';
function Image()
{
  return(
     <div className="dImage_1">
       <img src="./images/pes3.jpg"/>
       
     </div>
  )

}

function MainContent_1()
{
  return(
  
    <div className="donateMain_1">
      <div className="infoBox_1">  
      <p className="donateInfo_1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Leo duis ut diam quam. Id diam maecenas ultricies mi eget. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Faucibus scelerisque eleifend donec pretium. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Malesuada pellentesque elit eget gravida. Nibh ipsum consequat nisl vel pretium lectus quam. Nisi est sit amet facilisis magna. Donec ultrices tincidunt arcu non. Et magnis dis parturient montes. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Dolor morbi non arcu risus quis varius quam. Faucibus pulvinar elementum integer enim neque. Tortor posuere ac ut consequat semper viverra nam libero.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Leo duis ut diam quam. Id diam maecenas ultricies mi eget. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Faucibus scelerisque eleifend donec pretium. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Malesuada pellentesque elit eget gravida. Nibh ipsum consequat nisl vel pretium lectus quam. Nisi est sit amet facilisis magna. Donec ultrices tincidunt arcu non. Et magnis dis parturient montes. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Dolor morbi non arcu risus quis varius quam. Faucibus pulvinar elementum integer enim neque. Tortor posuere ac ut consequat semper viverra nam libero.
    </p>
      </div>
     
       <div className="donateBox">
       <h1 className="donateHeading"> Why Donate to Pehchaan Ek Safar?</h1>
       <button className="payButton" >Donate Now</button>
       </div>


    </div>
     
  )
}
function MainContent_2()
{
    return(
     
      <div className="donateMain_2">
            <div className="dImage_2">
            <img src="./images/pes4.jpg"/>
           </div>
 <div className="infoBox_2">  
      <p className="donateInfo_2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Leo duis ut diam quam. Id diam maecenas ultricies mi eget. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Faucibus scelerisque eleifend donec pretium. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Malesuada pellentesque elit eget gravida. Nibh ipsum consequat nisl vel pretium lectus quam. Nisi est sit amet facilisis magna. Donec ultrices tincidunt arcu non. Et magnis dis parturient montes. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Dolor morbi non arcu risus quis varius quam. Faucibus pulvinar elementum integer enim neque. Tortor posuere ac ut consequat semper viverra nam libero.
      </p>
      </div>
      
      
      </div>

    );
}

function MainContent_3()
{

  return(
     
    <div className="donateMain_3">
    <div className="infoBox_3">  
        <p className="donateInfo_3">
    Lorem ipsum. Leo duis ut diam quam. Id diam maecenas ultricies mi eget. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Faucibus scelerisque eleifend donec pretium. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Malesuada pellentesque elit eget gravida. Nibh ipsum consequat nisl vel pretium lectus quam. Nisi est sit amet facilisis magna. Donec ultrices tincidunt arcu non. Et magnis dis parturient montes. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Dolor morbi non arcu risus quis varius quam. Faucibus pulvinar elementum integer enim neque. Tortor posuere ac ut consequat semper viverra nam libero.
    </p> </div>
    
    <div className="dImage_3">
  
       <img src="./images/pes1.jpg"/>
       
         </div>
    
    
    </div>

  );
   


}

function DonateVia()
{
    return(
     <div className="donateViaBox">
     <h1 className="donateVia">DONATE VIA</h1>


     </div>
    )

}



const Carousel = () => {
  const [activeImage, setActiveImage] = useState('pes_qr.jpeg');

  const handleButtonClick = (imageName) => {
    setActiveImage(imageName);
  };

  return (
    <div>
      <div className="boxbuttons">   
      
        <button onClick={() => handleButtonClick('pes_qr.jpeg')}  className="payButton b1" >Google Pay</button>
        <button onClick={() => handleButtonClick('SBI.jpg')} className="payButton b1">SBI</button>
        <button onClick={() => handleButtonClick('UPI.jpg')} className="payButton b1">UPI</button> <button onClick={() => handleButtonClick('RazorPay.jpg')} className="payButton b1">RazorPay</button>
      </div>
      <div className="carousel">
        <img src={`/images/${activeImage}`} alt={activeImage} className="dImage_4 " />
      </div>
    </div>
  );
};







function DonatePage(){
    return(
        <>
        <Navbar />
        <Image />
        <MainContent_1 /> 
        <MainContent_2/>
        <MainContent_3/>
        <DonateVia/>
        <Carousel />
    
       
      
      

        

        </>  
  
     
    )
}


export default DonatePage;