import "../styles/pagesStyles/DonatePage.css";
import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import donateHeaderImage from "../assets/donateus.jpg";
import donateMsgImg from "../assets/joinuspage.jpg";
import qr from "../assets/upi.jpg";
import pes_qr from "../assets/pes_qr.jpeg";
import razorpayIcon from "../assets/razorpay.svg";
import bookReaderSVG from "../assets/book-reader-solid.svg";

function DonatePage() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <PageHeader title="Donate" image={donateHeaderImage} />

      <div className="donation-text">
        <img src={donateMsgImg} className="donation-text-img"></img>
        <div className="donation-msg">
          <img src={bookReaderSVG} className="book-reader-svg"></img>
          <div className="donation-underline-1"></div>
          <h2>You Can Make a Difference Right Now!!</h2>
          <div className="donation-underline-2"></div>
          <p>
            Every donation, regardless of size, brings us one step closer to
            creating positive change. Your support is invaluable, and we are
            grateful for your consideration. Thank you for being a part of our
            mission. Together, we can make a lasting difference.
          </p>
        </div>
      </div>
      <div className="donation-method-heading">
        <h1>Donation Methods</h1>
      </div>

      <div className="payment-methods">
        <div className="upi">
          <h3>UPI</h3>
          <img src={qr}></img>
          <p>
            Pehchaan Ek Safar<br></br>9463737258@okbizaxis
          </p>
          <p>Bank charges: Rs. 0.0</p>
          <button onClick={toggleModal} className="btn-modal">
            Click Here
          </button>
          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <img src={pes_qr}></img>
                <button className="close-modal" onClick={toggleModal}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bank">
          <h3>Bank Transfer</h3>
          <p>
            A/c Number: 38276019119<br></br>Name: Pehchaan Ek Safar<br></br>Bank
            Name: SBI<br></br>IFSC code: SBIN0013181
          </p>
          <p>Bank charges: Rs. 0.0</p>
          <button onClick={toggleModal} className="btn-modal">
            Click Here
          </button>
          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <img src={pes_qr}></img>
                <button className="close-modal" onClick={toggleModal}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="upi">
          <h3>Razor Pay</h3>
          <img src={razorpayIcon} className="razorpay-icon"></img>
          <p>
            Pehchaan Ek Safar<br></br>RazorPay
          </p>
          <p>Bank charges: Rs. 0.0</p>
          <a href="https://razorpay.com/payment-button/pl_K9P2tcsWaKFJNo/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button">
            <button className="razor-btn">Click Here</button>
          </a>
        </div>
      </div>

      <div className="donation-method-heading">
        <h1>Privacy Policy</h1>
      </div>

      <div className="privacy-policy">
        <div className="privacy-policy-card">
          <h3>Privacy Statement</h3>
          <p>
            Pehcaan Ek Safar is committed to protect the privacy of users of
            this website. The information received is kept confidential and is
            disclosed to such third parties as may be necessary to process the
            donation.
          </p>
        </div>
        <div className="privacy-policy-card">
          <h3>Personal Information</h3>
          <p>
            All rights, personal data and privacy are maintained by Pehchaan Ek
            Safar. No information or data is shared. All rights are secured and
            safe.
          </p>
        </div>
        <div className="privacy-policy-card">
          <h3>Our words</h3>
          <p>
            Pehcaan Ek Safar is committed to protect the privacy of users of
            this website. The information received is kept confidential and is
            disclosed to such third parties as may be necessary to process the
            donation.
          </p>
        </div>
      </div>
    </>
  );
}

export default DonatePage;
