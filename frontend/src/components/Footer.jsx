import React from 'react';

export default function FooterPES(){
  return(
    <div>
    <footer className="site-footer">
    <div className="container">
      <div className="row">

      <div className="col-md-5 col-xs-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d54740.695828695265!2d76.503064!3d30.962291!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3905542fe45e58f7%3A0x5d16c2617cfdbdb8!2sIndian%20Institute%20Of%20Technology%E2%80%93Ropar%20(IIT%E2%80%93Ropar)%2C%20Bara%20Phool%2C%20Punjab%20140001!3m2!1d30.968616899999997!2d76.473305!5e0!3m2!1sen!2sin!4v1702729445810!5m2!1sen!2sin" width="450" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

        <div className="col-md-3 col-xs-12">
          <h6>Office</h6> 
         
          <p className="text-justify">
          Technology Business Incubator Foundation <br />
          Indian Institute of Technology Ropar <br />
          Nangal-Road, Rupnagar – 140001 <br />
          Punjab, India
          </p>
        </div>

        <div className="col-md-2 col-xs-12">
          <h6>Info</h6>
          <ul className="footer-links">
            <li><a href="/src/docs/privacyPolicy.pdf">Privacy Policy</a></li>
            <li><a href="/src/docs/Social_Media_Policy.pdf">Social Media Policy</a></li>
            <li><a href="/src/docs/Child_Protection_Policy.pdf">Child Potection Policy</a></li>
            <li><a href="/src/docs/terms_and_cond.pdf">Terms and Conditions</a></li>
          </ul>
        </div>

        <div className="col-md-2 col-xs-12">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Contribute</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>
      <hr />
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">&copy; 2023 Copyright &nbsp; 
            <a href="https://www.iitrpr.ac.in/pehchaanes">www.iitrpr.ac.in/pehchaanes</a>
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li><a className="facebook" href="https://www.facebook.com/PehchaanIITRopar/"><i className="fab fa-facebook"></i></a></li>
            {/* <li><a className="twitter" href="https://twitter.com/pehchaanes"><i className="fab fa-twitter"></i></a></li> */}
            <li><a className="twitter" href="https://twitter.com/pehchaanes"><i className="fab fa-x-twitter"></i></a></li>
            <li><a className="instagram" href="https://www.instagram.com/pehchaan_ek_safar_iitrpr/"><i className="fab fa-instagram"></i></a></li>  
            <li><a className="linkedin" href="https://www.linkedin.com/company/pehchaan-ek-safar/"><i className="fab fa-linkedin"></i></a></li>  
            <li><a className="youtube" href="https://www.youtube.com/channel/UCoHYRiiJA8feit1mHY3L4Yw/"><i className="fab fa-youtube"></i></a></li>   
            <li><a className="email" href="mailto: pehchaanes@iitrpr.ac.in"><i className="fas fa-envelope"></i></a></li>   
          </ul>
        </div>
      </div>
    </div>
</footer>
</div>
  )
  }

